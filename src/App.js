import React from 'react';
import Spotify from 'spotify-web-api-js';
import Util from './util';
import './App.css';

// Set up Spotify. This must execute immediately incase a redirect is necessary. There is maybe a
// better practice for where this function should be called.
const spotify = new Spotify();
Util.setupSpotify(spotify);

class DeviceSelect extends React.Component {
  createOptions() {
    const options = [];
    for (const device of this.props.devices) {
      const option = (
        <option key={device.id} value={device.id}>
          {device.name}
        </option>
      );
      options.push(option);
    }
    return options;
  }

  render() {
    return (
      <select value={this.props.value} onChange={this.props.onChange}>
        {this.createOptions()}
      </select>
    );
  }
}

class StartButton extends React.Component {
  render() {
    const text = this.props.gameHasStarted
      ? this.props.gameIsPaused
        ? 'Play'
        : 'Pause'
      : 'Play';
    return <button onClick={this.props.onClick}>{text}</button>;
  }
}

class Timer extends React.Component {
  render() {
    const minutes = this.props.minutes.toString().padStart(2, '0');
    const seconds = this.props.seconds.toString().padStart(2, '0');
    return (
      <span>
        {minutes}:{seconds}
      </span>
    );
  }
}

class TrackInformation extends React.Component {
  render() {
    return (
      <div>
        <img
          src={this.props.albumImage}
          alt={this.props.albumName}
          width="175"
          height="175"
        />
        <p>{this.props.songName}</p>
        <p>{this.props.artists}</p>
      </div>
    );
  }
}

class RestartButton extends React.Component {
  render() {
    const styles = {
      visibility: this.props.gameHasStarted ? 'visible' : 'hidden',
    };

    return (
      <button
        style={styles}
        className="restart-button"
        onClick={this.props.onClick}
      >
        Restart
      </button>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    // Set initial state
    this.state = this.getInitialState();

    // Bind class functions
    this.deviceSelectChangeHandler = this.deviceSelectChangeHandler.bind(this);
    this.startButtonClickHandler = this.startButtonClickHandler.bind(this);
  }

  getInitialState() {
    return {
      devices: [],
      currentDeviceID: '',
      minutes: 0,
      seconds: 0,
      gameIsPaused: true,
      gameHasStarted: false,
      tickIntervalID: null,
      songName: null,
      artists: null,
      albumImage: null,
      albumName: null,
    };
  }

  async componentDidMount() {
    // Load data from Spotify
    const [{ devices }, { device }] = await Promise.all([
      spotify.getMyDevices(),
      spotify.getMyCurrentPlaybackState(),
    ]);
    this.setState({ devices, currentDeviceID: device.id });

    // Keep an eye on available devices
    setInterval(() => this.getDevices(), 5000);

    // Keep an eye on current track and play status
    setInterval(() => this.getCurrentTrack(), 900);
  }

  async getDevices() {
    const { devices } = await spotify.getMyDevices();
    this.setState({ devices });
  }

  async getCurrentTrack() {
    const result = await spotify.getMyCurrentPlayingTrack();
    const gameIsPaused = !result.is_playing;
    const songName = result.item.name;
    let artists = '';
    for (let i = 0; i < result.item.artists.length; i++) {
      const artist = result.item.artists[i];
      artists += artist.name;
      if (i < result.item.artists.length - 1) {
        artists += ', ';
      }
    }
    const albumImage =
      result.item.album.images[result.item.album.images.length - 2].url;
    const albumName = result.item.album.name;
    this.setState({ gameIsPaused, songName, artists, albumImage, albumName });
  }

  async deviceSelectChangeHandler(event) {
    // Update the state
    this.setState({ currentDeviceID: event.target.value });
    // Switch Spotify play to selected device
    await spotify.transferMyPlayback([event.target.value]);
  }

  async startButtonClickHandler() {
    // If the game has not yet started, start the game
    if (!this.state.gameHasStarted) {
      const intervalID = setInterval(() => this.tick(), 1000);
      this.setState({ gameHasStarted: true, tickIntervalID: intervalID });
    }

    if (this.state.gameIsPaused) {
      // Pause Spotify using the selected device
      await spotify.play({ device_id: this.state.currentDeviceID });
    } else {
      // Play Spotify using the selected device
      await spotify.pause();
    }
  }

  tick() {
    // If the game is not active, exit the function
    if (this.state.gameIsPaused) {
      return;
    }

    // Update the counter
    let seconds = this.state.seconds + 1;
    let minutes = this.state.minutes;
    const secondsInOneMinute = 60;
    if (seconds >= secondsInOneMinute) {
      seconds = 0;
      minutes += 1;
    }
    this.setState({ seconds, minutes });

    // Skip to next track if seconds is 0, do not await
    if (seconds === 0) {
      spotify.skipToNext();
    }
  }

  restartButtonClickHandler() {
    // // Stop tick interval
    // clearInterval(this.state.tickIntervalID);
    // // Reset state
    // this.setState(this.getInitialState());

    // For now, just reload the page
    window.location = window.location.href;
  }

  render() {
    return (
      <div className="App">
        <DeviceSelect
          value={this.state.currentDeviceID}
          onChange={this.deviceSelectChangeHandler}
          devices={this.state.devices}
        />
        <StartButton
          onClick={this.startButtonClickHandler}
          gameHasStarted={this.state.gameHasStarted}
          gameIsPaused={this.state.gameIsPaused}
        />
        <Timer minutes={this.state.minutes} seconds={this.state.seconds} />
        <TrackInformation
          songName={this.state.songName}
          artists={this.state.artists}
          albumImage={this.state.albumImage}
          albumName={this.state.albumName}
        />
        <RestartButton
          onClick={this.restartButtonClickHandler}
          gameHasStarted={this.state.gameHasStarted}
        />
      </div>
    );
  }
}

export default App;

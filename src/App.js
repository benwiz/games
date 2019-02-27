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
        ? 'Resume'
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
      <div className="track-information">
        <img
          src={this.props.albumImage}
          alt={this.props.albumName}
          width="175"
          height="175"
        />
        <p className="song-name">{this.props.songName}</p>
        <p className="artists">{this.props.artists}</p>
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

  componentDidMount = async () => {
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
  };

  getDevices = async () => {
    const { devices } = await spotify.getMyDevices();
    this.setState({ devices });
  };

  getCurrentTrack = async () => {
    const result = await spotify.getMyCurrentPlayingTrack();

    // Only update gameIsPaused if the game is started
    let gameIsPaused = this.state.gameIsPaused;
    if (this.state.gameHasStarted) {
      gameIsPaused = !result.is_playing;
    }

    // Always update track info
    const songName = result.item.name;
    let artists = '';
    for (let i = 0; i < result.item.artists.length; i++) {
      const artist = result.item.artists[i];
      artists += artist.name;
      if (i < result.item.artists.length - 1) {
        artists += ', ';
      }
    }
    const albumImage = result.item.album.images[0].url; // TODO: Change to 1 for a smaller image
    let albumName = '';
    if (result && result.item && result.item.album && result.item.album.name) {
      albumName = result.item.album.name;
    }

    // Update the state
    this.setState({ gameIsPaused, songName, artists, albumImage, albumName });
  };

  deviceSelectChangeHandler = async event => {
    // Update the state
    this.setState({ currentDeviceID: event.target.value });
    // Switch Spotify play to selected device
    await spotify.transferMyPlayback([event.target.value]);
  };

  startButtonClickHandler = async () => {
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
  };

  tick = () => {
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
  };

  restartButtonClickHandler = () => {
    // Stop tick interval
    clearInterval(this.state.tickIntervalID);
    // Reset state
    this.setState(this.getInitialState());
  };

  render = () => {
    const style = { backgroundImage: `url(${this.state.albumImage})` };
    return (
      <div className="App" style={style}>
        <div className="dimmer">
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
      </div>
    );
  };
}

export default App;

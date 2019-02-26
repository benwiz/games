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
    };
  }

  async componentDidMount() {
    // Load data from Spotify
    // TODO: Need to handle empty devices list (and maybe missing device from current playback)
    const [{ devices }, { device }] = await Promise.all([
      spotify.getMyDevices(),
      spotify.getMyCurrentPlaybackState(),
    ]);
    this.setState({ devices, currentDeviceID: device.id });
  }

  async getCurrentPlaybackState() {
    const playbackState = await spotify.getMyCurrentPlaybackState();
    const gameIsPaused = !playbackState.is_playing;
    this.setState({ gameIsPaused });
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
    // Always keep an eye on Spotify's play status so that even if the user pauses Spotify using
    // another device, the game will automatically be paused. If the person presses play on the
    // other device, the game will be resumed.
    this.getCurrentPlaybackState();

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

  // TODO: Only show restart button if there is a tickIntervalID
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
        <RestartButton
          onClick={this.restartButtonClickHandler}
          gameHasStarted={this.state.gameHasStarted}
        />
      </div>
    );
  }
}

export default App;

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
    return <button onClick={this.props.onClick}>Start</button>;
  }
}

// class Timer extends React.Component {
//   render() {
//     return <span>{this.props.value}</span>;
//   }
// }

class App extends React.Component {
  constructor(props) {
    super(props);

    // Set initial state
    this.state = {
      devices: [],
      currentDeviceID: '',
      targetMinutes: 60,
      minutes: 0,
      seconds: 0,
    };

    // Bind class functions
    this.deviceSelectChangeHandler = this.deviceSelectChangeHandler.bind(this);
    this.startButtonClickHandler = this.startButtonClickHandler.bind(this);
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

  tick() {
    let seconds = this.state.seconds + 1;
    let minutes = this.state.minutes;
    if (seconds >= 60) {
      seconds = 0;
      minutes += 1;
    }
    this.setState({ seconds, minutes });

    console.log(`${this.state.minutes}:${this.state.seconds}`);
  }

  async startButtonClickHandler() {
    // Play Spotify using the selected device
    await spotify.play({ device_id: this.state.currentDeviceID });
    // Start the timer
    setInterval(() => this.tick(), 1000);
  }

  async deviceSelectChangeHandler(event) {
    // Update the state
    this.setState({ currentDeviceID: event.target.value });
    // Switch Spotify play to selected device
    await spotify.transferMyPlayback([event.target.value]);
  }

  render() {
    return (
      <div className="App">
        <DeviceSelect
          value={this.state.currentDeviceID}
          onChange={this.deviceSelectChangeHandler}
          devices={this.state.devices}
        />
        <StartButton onClick={this.startButtonClickHandler} />
      </div>
    );
  }
}

export default App;

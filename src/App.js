import React from 'react';
import Cookies from 'universal-cookie';
import * as Spotify from 'spotify-web-api-js';
import './App.css';

// Set up cookie manager (TODO: Put this block in a proper place)
const cookies = new Cookies();

// Set up Spotify (TODO: Put this block in a proper place)
const spotify = new Spotify();

// http://localhost:3000/?code=AQCxX3OSP8zojzDz0O3Gl4rdKGTS-icK3yF-EcBQNYKdRLlV12b8aeonTZo3CPpr6X2_dM8Hyp5x7C_cLus6WNFbVgyyNZ1PS7XB5IzZOIP9r4K_wxIb2nReuEgjqn7mFufJrVql9vNGmJcY1uRuf5_SM54RkP8tqETJ1DQ0Lp0kDaQmCYSD-7AtVp1-Xo7W1B8MEVoOOwJJNjnLc4SJXtvXpBPw6Af57--4NBw0z0PtoAL0xb3jlPIr9YGbgcjaSYRZ
// TODO: If query param `code` exists, then use that as spotify access token (and save to cookie), else try cookie, else redirect

let spotifyAccessToken = cookies.get('spotify-access-token');
if (spotifyAccessToken) {
  spotify.setAccessToken(spotifyAccessToken);
} else {
  console.log('redirect to get spotify access token');

  const client_id = 'ff53948d58f1491baa6169d34bc4179a';
  const scopes = encodeURIComponent(
    'user-read-playback-state user-modify-playback-state'
  );
  const redirect_uri = window.location.origin;
  const url = `https://accounts.spotify.com/authorize?response_type=code&client_id=${client_id}&scope=${scopes}&redirect_uri=${redirect_uri}`;
  window.location = url;
}

const StartButton = props => <button onClick={props.onClick}>Start</button>;

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

class App extends React.Component {
  constructor(props) {
    super(props);

    // Set initial state
    this.state = {
      devices: [],
      currentDeviceID: '',
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

  async deviceSelectChangeHandler(event) {
    // Update the state
    this.setState({ currentDeviceID: event.target.value });
    // Switch Spotify play to selected device
    await spotify.transferMyPlayback([event.target.value]);
  }

  async startButtonClickHandler() {
    // Play Spotify using the selected device
    await spotify.play({ device_id: this.state.currentDeviceID });
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

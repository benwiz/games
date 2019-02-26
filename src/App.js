import React from 'react';
import * as Spotify from 'spotify-web-api-js';
import './App.css';

// Set up Spotify (TODO: Put this in a proper place using web login)
const spotify = new Spotify();
spotify.setAccessToken(
  'BQCI2wZ-GE4k35VQY4wrqs-HVnm2n4eWI93WqayyMZgR_8BSOXeiJnI8XnvVdvTHgZRXWg5GAqoHTST1eTOlnhLm7lmTQRjD_zPYE-WMrR_UVrg98sJOBHID2jGvhver9KgF00V0k492S4eTdcc-kpcJxsriustJGltn3p_v8IZ_1j8HKCo6lZQqPjBmPoyIPzaSIwrlY48dS3JnS5gnuU71'
);

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

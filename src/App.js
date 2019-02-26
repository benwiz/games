import React from 'react';
// import * as Spotify from 'spotify-web-api-js';
import './App.css';

// const spotify = new Spotify();

const StartButton = props => <button onClick={props.onClick}>Start</button>;

class DeviceSelect extends React.Component {
  createOptions() {
    const options = [];
    for (const device of this.props.devices) {
      const option = (
        <option key={device} value={device}>
          {device}
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

    // Get devices from spotify
    const devices = ['phone', 'computer'];

    // Set initial state
    this.state = {
      devices,
      device: devices[0],
    };

    // Bind class functions
    this.deviceSelectChangeHandler = this.deviceSelectChangeHandler.bind(this);
  }

  deviceSelectChangeHandler(event) {
    this.setState({ device: event.target.value });
  }

  startButtonClickHandler() {
    console.log('startButtonClickHandler()');
  }

  render() {
    return (
      <div className="App">
        <DeviceSelect
          value={this.state.device}
          onChange={this.deviceSelectChangeHandler}
          devices={this.state.devices}
        />
        <StartButton onClick={this.startButtonClickHandler} />
      </div>
    );
  }
}

export default App;

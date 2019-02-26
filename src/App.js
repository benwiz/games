import React from 'react';
import * as Spotify from 'spotify-web-api-js';
import './App.css';

const spotify = new Spotify();

const StartButton = props => <button onClick={props.onClick}>Start</button>;

class DeviceSelect extends React.Component {
  render() {
    return (
      <select value={this.props.value} onChange={this.props.onChange}>
        <option value="phone">Phone</option>
        <option value="mac">Mac</option>
      </select>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      device: '', // TODO: First device should be selected
    };
  }

  deviceSelectChangeHandler(event) {
    console.log('change event:', event.target.value);
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
        />
        <StartButton onClick={this.startButtonClickHandler} />
      </div>
    );
  }
}

export default App;

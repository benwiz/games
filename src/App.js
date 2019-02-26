import React from 'react';
import * as Spotify from 'spotify-web-api-js';
import './App.css';

const spotify = new Spotify();

const StartButton = props => <button onClick={props.onClick}>Start</button>;

const DeviceSelect = props => (
  <select value={props.value} onChange={props.onChange}>
    <option value="12sx">Phone</option>
    <option value="8e56">Mac</option>
  </select>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      device: '', // TODO: First device should be selected
    };
  }

  deviceSelectChangeHandler(event) {
    console.log('change event:', event);
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

import React from 'react';
import './App.css';

const StartButton = props => <button onClick={props.onClick}>Start</button>;

class App extends React.Component {
  startButtonClickHandler() {
    console.log('startButtonClickHandler()');
  }

  render() {
    return (
      <div className="App">
        <StartButton onClick={this.startButtonClickHandler} />
      </div>
    );
  }
}

export default App;

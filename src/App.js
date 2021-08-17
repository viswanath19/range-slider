import React from 'react';
import './App.css';
import RangeSlider from './components/RangeSlider';

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {}
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <RangeSlider
            width={"100%"}
            max={100}
            step={1}
            min={0}
            progressValue={parseInt(localStorage.getItem("currentValue")) || 0}
            onChange={(event, value) => {
              localStorage.setItem("currentValue",value);
              this.setState({ value });
            }}
          />
          {/*<img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>*/}
        </header>
      </div>
    );
  }
 
}

export default App;

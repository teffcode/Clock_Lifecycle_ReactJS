import React, { Component } from 'react';

import Clock from './components/Clock';

import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state = {
      date: new Date()
    }
  }

  componentDidMount(){ // Runs after the component output has been rendered to the DOM
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount(){ // Clear that timer whenever the DOM produced by the Clock is removed
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <Clock date={this.state.date}/>
      </div>
    );
  }
}

export default App;




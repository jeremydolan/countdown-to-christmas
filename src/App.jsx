// Start with the react component, to extend
// make sure it can be styled
import React, { Component } from 'react';
import Clock from './Clock'
import './app.css';

// the App class, will extend the Component class
class App extends Component {
  // constructor method constructs initial object includes vars called 'props' in react
  constructor(props) {
    // component passes own props
    super(props);
    // setting state
    this.state = {
      deadline: 'December 25, 2019',
      newDeadline: ''
    }
  }

  changeDeadline() {
    // set the new deadline
    this.setState({deadline: this.state.newDeadline})
  }

  render() {
    // React functions always return something
    // see () => this.changeDeadline() for es6 version of anonymous functions
    // note: event =>(this.setState({newDeadline: event.target.value})) calls set state method in the app
    return (
      <div className='App'>
        <div className='App-title'>Countdown to {this.state.deadline}</div>
        <Clock
        deadline={this.state.deadline}
        />
        <div>
          <input
            placeholder='new date'
            onChange={event =>(this.setState({newDeadline: event.target.value}))}
          />
          <button onClick={() => this.changeDeadline()}>Submit</button>
        </div>
       </div>
     )
  }
}
// exports the App class for instantiation
export default App;

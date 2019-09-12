// Start with the react component, to extend
import React, { Component } from 'react';
// make sure it can be styled
import './app.css';

// the Clock class, will extend the Component class
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

// need to research componentWillMount and it's alternatives, since I needed to add the UNSAFE_ prefix
// once Component class is mounted, it will also mount
// fix me: make sure you understand the bigger picture on this
  UNSAFE_componentWillMount() {
    // pass deadline to the getTimeUntil function
    this.getTimeUntil(this.props.deadline);
  }

// once the Component class has done with the mounting task, set interval to getTimeUntil the deadline repeated every second
  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

// getTimeUntil function is passed the deadline and calculates time until the deadline, it then changes the display to reflect that
  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time/1000) % 60);
    const minutes = Math.floor((time/1000/60) % 60);
    const hours = Math.floor(time/(1000*60*60) % 24);
    const days = Math.floor(time/(1000*60*60*24));
// changes the display
    this.setState({days, hours, minutes, seconds,});
  }

  render() {
// always need to return something
    return (
      <div>
        <div className='Clock-days'>{this.state.days} days</div>
        <div className='Clock-hours'>{this.state.hours} hours</div>
        <div className='Clock-minutes'>{this.state.minutes} minutes</div>
        <div className='Clock-seconds'>{this.state.seconds} seconds</div>
      </div>
    )
  }
}
// export Clock class
export default Clock;

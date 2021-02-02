import {Component} from 'react';

class MoodTracker extends Component {
  constructor() {
    super();
    this.state = {
      moodPoints: 1
    };
  }
  render() {
    return (
      <div>
        <h3>On a scale from 1 - 10,</h3>
        <p>You are this happy: {this.state.moodPoints}</p>
      </div>
    )
  }
};

export default MoodTracker;
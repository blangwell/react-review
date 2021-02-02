import {Component} from 'react';

class MoodTracker extends Component {
  constructor() {
    super();
    this.state = {
      moodPoints: 1
    };
  };
  increaseMood = () => {
    let newMoodPoints = this.state.moodPoints >= 10 ? 0 : this.state.moodPoints + 1;
    this.setState({
      moodPoints: newMoodPoints
    });
  };
  render() {
    return (
      <div>
        <h3>On a scale from 1 - 10,</h3>
        <p>You are this happy: {this.state.moodPoints}</p>
        <button onClick={this.increaseMood}>Add Point</button>
      </div>
    )
  }
};

export default MoodTracker;
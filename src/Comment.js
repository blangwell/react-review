import {Component} from 'react';

class Comment extends Component {
  render() {
    return (
      <div className="comment">
        <p>{this.props.message}</p>
      </div>
    )
  }
}

export default Comment;
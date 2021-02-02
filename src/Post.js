import {Component} from 'react';
import Comment from './Comment';

class Post extends Component {
  render() {

    let comments = this.props.post.comments.map((comment, idx) => (
      <Comment message={comment} key={idx}/>
    ))

    return (
      <div>
        <h1>{this.props.post.title}</h1>
        <h3>{this.props.post.author}</h3>
        <p>{this.props.post.body}</p>
        <br />
        <h3>Comments</h3>
        {comments}
      </div>
    )
  }
}

export default Post;
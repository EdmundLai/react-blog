import React from 'react';
import RequestHandler from '../RequestHandler/RequestHandler';

class TestAPI extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 1
    };

    this.callDeletePost = this.callDeletePost.bind(this);
  }

  callGetPosts() {
    RequestHandler.sendGetPosts();
  }

  callDeletePost(id) {
    RequestHandler.sendDeletePost(id)
    .then(() => {
      this.props.callback();
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="TestAPI">
        <button onClick={() => this.callGetPosts}>Get Posts</button>
        <button onClick={() => this.callDeletePost(this.state.id)}>Delete Post</button>
      </div>
    );
  }
}

export default TestAPI;
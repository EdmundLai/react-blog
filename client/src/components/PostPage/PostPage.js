import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
import RequestHandler from '../RequestHandler/RequestHandler';
import {Redirect} from 'react-router-dom';

class PostPage extends React.Component {
  render() {
    return(
      <div className="PostPage">
        <BlogPost match={this.props.match}/>
        <PostOptions match={this.props.match} callback={this.props.callback}/>
      </div>
    );
  }
}

class PostOptions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      goToPosts: false
    }

    this.deletePost = this.deletePost.bind(this);
  }

  deletePost() {
    RequestHandler.sendDeletePost(this.props.match.params.postID)
    .then(() => {
      this.props.callback();
      this.setState({
        goToPosts: true
      })
    })
    .catch(err => {
      console.error(err);
    })
  }

  render() {
    if(this.state.goToPosts) {
      return <Redirect to="/posts"/>
    }
    return(
      <div className="PostOptions">
        <button onClick={this.deletePost}>Delete Post</button>
      </div>
    );
  }
}

export default PostPage;
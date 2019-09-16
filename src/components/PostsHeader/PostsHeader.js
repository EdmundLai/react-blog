import React from 'react';
import './PostsHeader.css';

class PostsHeader extends React.Component {
  render() {
    return (
      <div className="PostsHeader">
        <h2>All Posts</h2>
        <button>New Post...</button>
      </div>
    );
  }
}

export default PostsHeader;
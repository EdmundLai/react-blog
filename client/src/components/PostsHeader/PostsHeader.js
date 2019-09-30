import React from 'react';
import {Link} from "react-router-dom";
import './PostsHeader.css';

class PostsHeader extends React.Component {
  render() {
    return (
      <div className="PostsHeader">
        <h2>All Posts</h2>
        <div className="Side Buttons">
          <Link to="/create">
            <button>New Post...</button>
          </Link>
        </div>
        
      </div>
    );
  }
}

export default PostsHeader;
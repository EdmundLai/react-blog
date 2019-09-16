import React from 'react';
import './PostArticle.css';

class PostArticle extends React.Component {
  render() {
    return (
      <div className="PostArticle">
        {this.props.postContent}
      </div>
    );
  };
}

export default PostArticle;
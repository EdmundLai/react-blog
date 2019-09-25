import React from 'react';
import ArticleInfo from '../ArticleInfo/ArticleInfo';
import './PostTopline.css';

class PostTopline extends React.Component {
  render() {
    return (
      <div className="PostTopline">
        <h3>{this.props.postTitle}</h3>
        <ArticleInfo 
          articleAuthor={this.props.postAuthor}
          articleDate={this.props.postDate}
        />
        <p>{this.props.postDescription}</p>
      </div>
    );
  }
}

export default PostTopline;
import React from 'react';
import './ArticleInfo.css';

class ArticleInfo extends React.Component {
  render() {
    return (
      <div className="ArticleInfo">
        <div>{this.props.articleAuthor}</div>
        <div>{this.props.articleDate}</div>
      </div>
    );
  }
}

export default ArticleInfo;
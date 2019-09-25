import React from 'react';
import PostTopline from '../PostTopline/PostTopline';
import PostArticle from '../PostArticle/PostArticle';
import './BlogPost.css';

class BlogPost extends React.Component {
  render () {
    return (
      <div className="BlogPost">
        <PostTopline
        postTitle={this.props.title}
        postAuthor={this.props.author}
        postDate={this.props.date}
        postDescription={this.props.description}
        />
        <PostArticle postContent={this.props.content}/>
      </div>
    );
  }
}

export default BlogPost;
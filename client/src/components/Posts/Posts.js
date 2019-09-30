import React from 'react';
import PostsHeader from '../PostsHeader/PostsHeader';
import BlogPost from '../BlogPost/BlogPost';

class Posts extends React.Component {
  render() {
    return (
      <div className="Posts">
        <PostsHeader />
        {this.props.postsArray.map((post) => 
          <BlogPost key={post.id}
          title={post.title} 
          author={post.author} 
          date={post.date}
          description={post.description}
          content={post.content}/>)}
      </div>
    );
  }
}

export default Posts;
import React from 'react';
import PostsHeader from '../PostsHeader/PostsHeader';
import PostCard from '../PostCard/PostCard';

class Posts extends React.Component {
  render() {
    return (
      <div className="Posts">
        
        <PostsHeader />
        {this.props.postsArray.map((post) => 
          <PostCard
          key={post.id}
          title={post.title}
          author={post.author}
          date={post.date}
          id={post.id}
          match={this.props.match}
          />
        )}
      </div>
    );
  }
}

export default Posts;
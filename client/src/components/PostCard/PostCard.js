import React from 'react';
import { Link } from 'react-router-dom';
import './PostCard.css';

// Contains Post title as Link, author(s), and date posted
// not yet functional, do not use
class PostCard extends React.Component {
  render() {
    return (
      <div className="PostCard">
        <h2>
          <Link to={`${this.props.match.url}/${this.props.id}`}>{this.props.title}</Link>
        </h2>
        <PostCardSubtitle author={this.props.author} date={this.props.date}/>
      </div>
    );
  }
}

class PostCardSubtitle extends React.Component {
  render() {
    return(
      <div className="PostCardSubtitle">
        <div>{this.props.author}</div>
        <div>{this.props.date}</div>
      </div>
    );
  }
}



export default PostCard;
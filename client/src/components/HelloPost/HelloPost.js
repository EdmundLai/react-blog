import React from 'react';

// Test Component in place of BlogPost
class HelloPost extends React.Component {
  render() {
    return (
      <div className="HelloPost">
        {`Hello from post with id ${this.props.match.params.postID}!`}
      </div>
    );
  }
}

export default HelloPost;
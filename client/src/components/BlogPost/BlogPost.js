import React from 'react';
import PostTopline from '../PostTopline/PostTopline';
import PostArticle from '../PostArticle/PostArticle';
import RequestHandler from '../RequestHandler/RequestHandler';
import './BlogPost.css';

class BlogPost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      author: "",
      date: "",
      description: "",
      content: "",
      id: null
    }
  }

  componentDidMount() {
    RequestHandler.sendGetPostByID(this.props.match.params.postID)
    .then(response => {
      // console.log(response.data);
      if(response.data.length === 1) {
        let postObj = response.data[0];

        this.setState({
          title: postObj.title,
          author: postObj.author,
          date: postObj.date,
          description: postObj.description,
          content: postObj.content,
          id: postObj.id
        });
      }
    })
    .catch(err => {
      console.error(err);
    });
  }

  render () {
    return (
      <div className="BlogPost">
        <PostTopline
        postTitle={this.state.title}
        postAuthor={this.state.author}
        postDate={this.state.date}
        postDescription={this.state.description}
        />
        <PostArticle postContent={this.state.content}/>
      </div>
    );
  }
}

export default BlogPost;
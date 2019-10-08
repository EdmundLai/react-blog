import React from 'react';
import {Redirect} from 'react-router-dom';
import {getDateAsString} from '../../utils/DateUtils';
import RequestHandler from '../RequestHandler/RequestHandler';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import './CreatePostForm.css';

class CreatePostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {
        title: "",
        author: "",
        description: "",
        content: "",
        date: ""
      },
      goToPosts: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setPostDate = this.setPostDate.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    // Creates copy of previous state and modifies copy to be assigned to new state
    this.setState(prevState => {
      let post = Object.assign({}, prevState.post);
      post[name] = value;
      return { post };
    });

    this.setPostDate();
  }

  setPostDate() {
    let currentDate = getDateAsString();
    this.setState(prevState => {
      let post = Object.assign({}, prevState.post);
      post.date = currentDate;
      return { post };
    });
  }

  handleSubmit(event) {
    // using database instead of client storage
    // this.props.addToPosts(this.state.post);

    // Handling HTTP POST Request
    RequestHandler.sendCreatePost(this.state.post)
    .then(() => {
      this.props.callback();
    })
    .then(() => {
      this.setState({
        goToPosts: true
      });
    })
    .catch(err => {
      console.error(err);
    });
    
    event.preventDefault();
  }

  render() {
    if(this.state.goToPosts) {
      return <Redirect to="/posts"/>
    }

    return (
      <form className="CreatePostForm" onSubmit={this.handleSubmit}>
        <Input
          label="Post Title"
          name="title"
          value={this.state.post.title}
          onChange={this.handleInputChange}
        />
        <Input
          label="Author"
          name="author"
          value={this.state.post.author}
          onChange={this.handleInputChange}
        />
        <TextArea
          label="Subtitle"
          name="description"
          value={this.state.post.description}
          onChange={this.handleInputChange}
        />
        <TextArea
          label="Post Content"
          name="content"
          value={this.state.post.content}
          onChange={this.handleInputChange}
        />
        <input type="submit" value="Add Post"/>
      </form>
    );
  }
}

export default CreatePostForm;
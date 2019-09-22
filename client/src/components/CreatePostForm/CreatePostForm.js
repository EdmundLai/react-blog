import React from 'react';
import {Redirect} from 'react-router-dom';
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
      },
      goToPosts: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    this.props.addToPosts(this.state);
    this.setState({
      goToPosts: true
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
          value={this.state.title}
          onChange={this.handleInputChange}
        />
        <Input
          label="Author"
          name="author"
          value={this.state.author}
          onChange={this.handleInputChange}
        />
        <TextArea
          label="Subtitle"
          name="description"
          value={this.state.description}
          onChange={this.handleInputChange}
        />
        <TextArea
          label="Post Content"
          name="content"
          value={this.state.content}
          onChange={this.handleInputChange}
        />
        <input type="submit" value="Add Post"/>
      </form>
    );
  }
}

class Input extends React.Component {
  render() {
    return(
      <label>
        {this.props.label}
        <input 
          name={this.props.name}
          type="text"
          value={this.props.value} 
          onChange={this.props.onChange} />
      </label>
    );
  }
}

class TextArea extends React.Component {
  render() {
    return (
      <label>
        {this.props.label}
        <textarea 
          name={this.props.name} 
          type="text" 
          value={this.props.value} 
          onChange={this.props.onChange} />
      </label>
    );
  }
}

export default CreatePostForm;
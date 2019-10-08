import React from 'react';
import {Redirect} from 'react-router-dom';
// import {getDateAsString} from '../../utils/DateUtils';
import RequestHandler from '../RequestHandler/RequestHandler';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import './UpdatePostForm.css';

class UpdatePostForm extends React.Component {
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
      goToPosts: false,
      formLoaded: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.setPostDate = this.setPostDate.bind(this);
  }

  componentDidMount() {
    RequestHandler.sendGetPostByID(this.props.match.params.postID)
    .then(response => {
      console.log("get post by id succeeded!");
      if(response.data.length === 1) {
        console.log("data length is 1!");
        let postObj = response.data[0];
        let newPost = {
          title: postObj.title,
          author: postObj.author,
          description: postObj.description,
          content: postObj.content,
          date: postObj.date
        }

        this.setState({
          post: newPost
        });
      }
    })
    .then(() => {
      this.setState({
        formLoaded: true
      });
    })
    .catch(err => {
      console.error(err);
    });
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

    // not updating PostDate with Update
    // this.setPostDate();
  }

  // setPostDate() {
  //   let currentDate = getDateAsString();
  //   this.setState(prevState => {
  //     let post = Object.assign({}, prevState.post);
  //     post.date = currentDate;
  //     return { post };
  //   });
  // }

  handleSubmit(event) {
    // Handling HTTP PUT Request
    let postID = this.props.match.params.postID;
    RequestHandler.sendUpdatePost(this.state.post, postID)
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

    if(!this.state.formLoaded) {
      return <div>Loading...</div>
    }

    return (
      <form className="UpdatePostForm" onSubmit={this.handleSubmit}>
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
        <input type="submit" value="Update Post"/>
      </form>
    );
  }
}

export default UpdatePostForm;
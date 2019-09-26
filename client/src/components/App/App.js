import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import FooterInfo from '../FooterInfo/FooterInfo';
import AppHeader from '../AppHeader/AppHeader';
import PostsHeader from '../PostsHeader/PostsHeader';
import BlogPost from '../BlogPost/BlogPost';
import AboutMe from '../AboutMe/AboutMe';
import CreatePostForm from '../CreatePostForm/CreatePostForm';
import CarouselContainer from '../CarouselContainer/CarouselContainer';
import RequestHandler from '../RequestHandler/RequestHandler';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }

    this.updatePosts = this.updatePosts.bind(this);
  }

  componentDidMount() {
    this.updatePosts();
  }

  updatePosts() {
    RequestHandler.sendGetPosts()
    .then(response => {
      this.setState({
        posts: response.data
      });
    })
    .catch(error => {
      console.log(error);
    });
  }

  // addPost(post) {
  //   this.setState({
  //     posts: [...this.state.posts, post]
  //   });
  // }

  render() {
    return (
      <Router>
        <div className="App">
          <AppHeader />
          <main className="Body">
            <div className="BodyContainer">
              <Switch>
                <Route exact path="/" component={CarouselContainer}/>
                <Route path="/bio" component={AboutMe} />
                <Route path="/posts" render={(props) => <Posts {...props} postsArray={this.state.posts}/>}/>
                <Route path="/create" render={(props) => <CreatePostForm {...props} callback={this.updatePosts} />}/>
                <Route path="/test" component={TestAPI} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </main>
          <footer className="App-footer">
            <FooterInfo />
          </footer>
        </div>
      </Router>
    );
  }
}

class TestAPI extends React.Component {
  render() {
    return (
      <div className="TestAPI">
        <button onClick={RequestHandler.sendGetPosts}>Get Posts</button>
      </div>
    );
  }
}

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

class NotFound extends React.Component {
  render() {
    return(
      <div className="NotFound">
        <h2>404 PAGE NOT FOUND</h2>
      </div>
    );
  }
}

export default App;

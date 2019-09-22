import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import FooterInfo from '../FooterInfo/FooterInfo';
import AppHeader from '../AppHeader/AppHeader';
import PostsHeader from '../PostsHeader/PostsHeader';
import BlogPost from '../BlogPost/BlogPost';
import AboutMe from '../AboutMe/AboutMe'
import CreatePostForm from '../CreatePostForm/CreatePostForm'
import CarouselContainer from '../CarouselContainer/CarouselContainer'

// import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };

    this.addPost = this.addPost.bind(this);
  }

  addPost(post) {
    this.setState({
      posts: [...this.state.posts, post]
    });
  }

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
                <Route path="/create" render={(props) => <CreatePostForm {...props} addToPosts={this.addPost} />} />
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

class Posts extends React.Component {
  render() {
    return (
      <div className="Posts">
        <PostsHeader />
        {this.props.postsArray.map(
          (post) => <BlogPost title={post.title} author={post.author} date="January 1, 2000" content={post.content}/>)}
      </div>
    );
  }
}

export default App;

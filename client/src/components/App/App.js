import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import FooterInfo from '../FooterInfo/FooterInfo';
import AppHeader from '../AppHeader/AppHeader';
import Posts from '../Posts/Posts';
import TestAPI from '../TestAPI/TestAPI';
import AboutMe from '../AboutMe/AboutMe';
import CreatePostForm from '../CreatePostForm/CreatePostForm';
import CarouselContainer from '../CarouselContainer/CarouselContainer';
import RequestHandler from '../RequestHandler/RequestHandler';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    // need to find a way to keep state updated consistently
    // may use redux to manage state
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
                <Route path="/test" render={(props) => <TestAPI {...props} callback={this.updatePosts} />} />
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

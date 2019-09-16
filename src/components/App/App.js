import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PostsContainer from '../PostsContainer/PostsContainer';
import FooterInfo from '../FooterInfo/FooterInfo';
import AppHeader from '../AppHeader/AppHeader';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader />
        <main>
          <div className="BodyContainer">
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/bio" component={AboutMe} />
              <Route path="/posts" component={PostsContainer} />
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

class AboutMe extends React.Component {
  render() {
    return (
      <h2>All about me!</h2>
    );
  }
}

class LandingPage extends React.Component {
  render() {
    return (
      <h2>Homepage!</h2>
    );
  }
}

export default App;

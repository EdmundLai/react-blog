import React from 'react';
import {Link} from "react-router-dom";
import './AppHeader.css';

class AppHeader extends React.Component {
  render() {
    return (
      <header className="App-header">
        <h1>Food Blog</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/bio">About Me</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </header>
    );
  }
}

export default AppHeader;
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Food Blog</h1>
      </header>
      <main>
        <div className="BodyContainer">
          <PostsContainer />
        </div>
      </main>
      <footer className="App-footer">
        <FooterInfo />
      </footer>
    </div>
  );
}

// Container for all the blog posts that will be created
class PostsContainer extends React.Component {
  render() {
    return (
      <div className="PostsContainer">
        <BlogPost />
        <BlogPost />
      </div>
    );
  }
}

class BlogPost extends React.Component {
  render () {
    return (
      <div className="BlogPost">
        <PostTopline />
        <PostArticle />
      </div>
    );
  }
}

class PostTopline extends React.Component {
  render() {
    return (
      <div className="PostTopline">
        <h2>Post Title</h2>
        <ArticleInfo />
      </div>
    );
  }
}

class ArticleInfo extends React.Component {
  render() {
    return (
      <div className="ArticleInfo">
        <div>Post Author</div>
        <div>Date Posted</div>
      </div>
    );
  }
}

class PostArticle extends React.Component {
  render() {
    return (
      <div className="PostArticle">
        Post Content
      </div>
    );
  };
}

class FooterInfo extends React.Component {
  render() {
    return (
      <div className="FooterInfo">
        &#169; Test User 2019
      </div>
    );
    
  }
}

export default App;

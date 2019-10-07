import React from 'react';
import RequestHandler from '../RequestHandler/RequestHandler';

class TestAPI extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ids: [],
      id_selected: 0
    };

    this.callDeletePost = this.callDeletePost.bind(this);
    this.callGetPostIDs = this.callGetPostIDs.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  callGetPosts() {
    console.log('callGetPosts called!');
    RequestHandler.sendGetPosts()
    .then(response => {
      console.log(response.data);
    })
    .catch(err => {
      console.error(err);
    });
  }

  callGetPostByID(id) {
    console.log('callGetPostByID called!');
    RequestHandler.sendGetPostByID(id)
    .then(response => {
      console.log(response.data);
    })
    .catch(err => {
      console.error(err);
    });
  }

  callGetPostIDs() {
    console.log('callGetPostIDs called!');
    RequestHandler.sendGetIDs()
    .then(rows => {
      console.log(rows.data);
      let data_array = rows.data;
      let idsArray = [];
      for(let i = 0; i < data_array.length; i++) {
        idsArray.push(data_array[i].id);
      }

      this.setState({
        ids: idsArray
      });

    })
    .catch(err => {
      console.log(err);
    });
  }

  callDeletePost(id) {
    RequestHandler.sendDeletePost(id)
    .then(() => {
      this.props.callback();
    })
    .catch(err => {
      console.log(err);
    });
  }

  onChange(event) {
    const target = event.target;
    const val = target.value;

    this.setState({
      id_selected: val
    });
  }

  render() {
    return (
      <div className="TestAPI">
        <button onClick={this.callGetPosts}>Get Posts</button>
        <button onClick={() => this.callDeletePost(this.state.id_selected)}>Delete Post</button>
        <input type="text" value={this.state.id_selected} onChange={this.onChange}/>
        <button onClick={this.callGetPostIDs}>Get IDs of posts</button>
        <button onClick={() => this.callGetPostByID(3)}>Get Post by ID (id = 3)</button>
        {this.state.ids.map(id => 
          <p key={id}>{id}</p>
        )}
      </div>
    );
  }
}

export default TestAPI;
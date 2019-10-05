import axios from 'axios';

class RequestHandler {
  static sendCreatePost(postObject) {
    return axios.post('http://localhost:3000/api/posts/create', postObject)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => console.log(error));
  }

  static sendGetPosts() {
    return axios.get('http://localhost:3000/api/posts')
    .catch(error => {
      console.error(error);
    });
  }

  static sendGetIDs() {
    return axios.get('http://localhost:3000/api/posts/ids')
    .catch(error => {
      console.error(error);
    });
  }

  static sendDeletePost(id) {
    return axios.delete(`http://localhost:3000/api/posts/delete?id=${id}`)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    })

  }
}

export default RequestHandler;
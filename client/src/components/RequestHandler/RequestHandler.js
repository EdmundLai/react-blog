import axios from 'axios';

class RequestHandler {
  static sendCreatePost(postObject) {
    return axios.post('http://localhost:3000/api/posts/create', postObject)
    .then(response => {
      console.log(response);
      return response;
    })
    .catch(error => console.log(error));
  }

  static sendGetPosts() {
    return axios.get('http://localhost:3000/api/posts')
    .then(response => {
      console.log(response);
      return response;
    })
    .catch(error => console.log(error));
  }
}

export default RequestHandler;
var mysql = require('mysql');
const config = require('../config');

// Database class using promises created with tons of help from 
// https://codeburst.io/node-js-mysql-and-promises-4c3be599909b
class Database {
  constructor(config) {
    this.conn = mysql.createConnection(config);
  }

  query(sql, args) {
    return new Promise((resolve, reject) => {
      this.conn.query(sql, args, (err, rows) => {
        if (err) {
          return reject(err);
        }
        resolve(rows);
      });
    });
  }

  close() {
    return new Promise((resolve, reject) => {
      this.conn.end( err => {
        if(err) {
          return reject(err);
        }

        resolve();
      });
    });
  }
}

function createPostsTable() {
  let createTable = `CREATE TABLE IF NOT EXISTS posts(
    id int primary key auto_increment,
    title varchar(255) NOT NULL,
    author varchar(255) NOT NULL,
    date varchar(255) NOT NULL,
    description varchar(255) NOT NULL,
    content varchar(1000) NOT NULL
  )`;

  let database = new Database(config);

  database.query(createTable)
  .then(response => {
    database.close();
    return response;
  })
  .catch(err => {
    database.close();
    console.log(err);
  });

}

function insertPost(post) {
  let insertSQL = `INSERT INTO posts(title, author, date, description, content)
  VALUES(?, ?, ?, ?, ?)`;

  let post_array = [post.title, post.author, post.date, post.description, post.content];

  let database = new Database(config);

  database.query(insertSQL, post_array)
  .catch(err => {
    datanase.close();
    console.log(err);
  });
}

function getPosts() {
  let selectSQL = 'SELECT * FROM posts';

  let database = new Database(config);

  let result = database.query(selectSQL)
  .then(response => {
    database.close();
    return response;
  })
  .catch(err => {
    database.close();
    console.log(err);
  });

  return result;
}

exports.getPosts = function(req, res, next) {
  // res.send("Get Post not implemented yet!");
  getPosts()
  .then(posts => {
    res.send(posts);
  })
  .catch(err => err);

}

exports.createPost = function(req, res, next) {
  // res.send("Create Post not implemented yet!");
  // createPostsTable();

  console.log(req.body);

  insertPost(req.body);

  res.send("Post successfully created!");
}
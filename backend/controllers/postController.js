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

  return database.query(createTable)
  .then(() => {
    database.close();
  })
  .catch(err => {
    database.close();
    throw err;
  });

}

// SQL query for adding post into database
function insertPost(post) {
  let insertSQL = `INSERT INTO posts(title, author, date, description, content)
  VALUES(?, ?, ?, ?, ?)`;

  let post_array = [post.title, post.author, post.date, post.description, post.content];

  let database = new Database(config);

  database.query(insertSQL, post_array)
  .catch(err => {
    database.close();
    throw err;
  });
}

// SQL query for getting all posts from database
function getAllPosts() {
  let selectSQL = 'SELECT * FROM posts';

  let database = new Database(config);

  return database.query(selectSQL)
  .then(response => {
    database.close();
    return response;
  })
  .catch(err => {
    database.close();
    throw err;
  });
}

// SQL query for getting one post by id from database
function getPostByID(id) {
  let selectByIDSQL = 'SELECT * FROM posts WHERE id = ?';

  let database = new Database(config);

  return database.query(selectByIDSQL, id)
  .then(response => {
    database.close();
    return response;
  })
  .catch(err => {
    database.close();
    throw err;
  });
}

function getPostIDs() {
  let selectIDsSQL = 'SELECT id FROM posts';

  let database = new Database(config);

  return database.query(selectIDsSQL)
  .then((rows) => {
    database.close();
    return rows;
  })
  .catch(err => {
    database.close();
    throw err;
  });
}

// has not been tested yet
function updatePost(post, id) {
  let updateSQL = `UPDATE posts
  SET title = ?,
  author = ?,
  date = ?,
  description = ?,
  content = ?
  WHERE id = ?`;

  let postArray = Object.values(post);

  let updateParams = [...postArray, id];

  let database = new Database(config);

  return database.query(updateSQL, updateParams)
  .then(() => {
    database.close();
  })
  .catch(err => {
    database.close();
    throw err;
  });
}

function deletePost(id) {
  let deleteSQL = 'DELETE FROM posts WHERE id = ?';

  let database = new Database(config);

  return database.query(deleteSQL, id)
  .then((rows) => {
    let numRows = rows.affectedRows;
    // console.log(`numRows: ${numRows}`);
    
    return new Promise((resolve, reject) => {
      if(numRows === 1) {
        database.close();
        resolve(`Row with id ${id} deleted.`);
      } else if(numRows === 0) {
        reject('No rows affected!');
        return;
      } else {
        reject('Number of rows affected is not 0 or 1.');
        return;
      }
    });
  })
  .catch(err => {
    database.close();
    throw err;
  });
}

exports.databaseInit = function() {
  let database = new Database(config);

  let createDatabase = 'CREATE DATABASE IF NOT EXISTS react_blog';

  database.query(createDatabase)
  .then(() => {
    return createPostsTable();
  })
  .catch(err => {
    throw err;
  })
}

exports.getAllPosts = function(req, res, next) {
  getAllPosts()
  .then(posts => {
    res.send(posts);
  })
  .catch(err => {
    console.error(err);
    throw err;
  });
}

exports.createPost = function(req, res, next) {
  // createPostsTable();

  console.log(req.body);

  insertPost(req.body);

  res.send("Post successfully created!");
}

exports.updatePost = function(req, res, next) {
  res.send('updatePost not implemented yet!');

  // some call to updatePost()
}

exports.deletePost = function(req, res, next) {
  console.log(`id to be deleted: ${req.query.id}`);

  deletePost(req.query.id)
  .then(() => res.send(`post with id: ${req.query.id} deleted successfully!`))
  .catch(() => {
    res.send(`post with id ${req.query.id} was not able to be deleted.`);
  });
}

exports.getPostByID = function(req, res, next) {
  console.log(`post with id ${req.query.id} to be retrieved`);

  getPostByID(req.query.id)
  .then(row => {
    res.send(row);
  })
  .catch(() => {
    res.send(`post with id ${req.query.id} could not be retrieved`)
  });
}

exports.getPostIDs = function(req, res, next) {
  return getPostIDs()
  .then(rows => {
    res.send(rows);
  })
  .catch(err => {
    console.error(err);
    throw err;
  });
}
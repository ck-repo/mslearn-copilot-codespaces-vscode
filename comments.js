// Create web server                              
//   - serve static files from ./public
//   - handle GET and POST request
//   - handle REST request
//   - handle 404 error
//
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs');
var path = require('path');

// setup body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// serve static files
app.use(express.static(path.join(__dirname, 'public')));

// handle GET request
app.get('/', function(req, res) {
    res.send('Hello, World!');
});

app.get('/comments', function(req, res) {
    console.log('GET request received at /comments');
    fs.readFile(__dirname + '/public/data/comments.json', 'utf8', function(err, data) {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.status(200).send(data);
        }
    });
});

// handle POST request
app.post('/comments', function(req, res) {
    console.log('POST request received at /comments');
    fs.readFile(__dirname + '/public/data/comments.json', 'utf8', function(err, data) {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        } else {
            var comments = JSON.parse(data);
            comments.push(req.body);
            fs.writeFile(__dirname + '/public/data/comments.json', JSON.stringify(comments, null, 4), function(err) {
                if (err) {
                    console.log(err);
                    res.status(500).send('Internal Server Error');
                } else {
                    res.status(200).send(comments);
                }
            });
        }
    });
});

// handle REST request
app.delete('/comments/:id', function(req, res) {
    console.log('DELETE request received at /comments');
    fs.readFile(__dirname + '/public/data/comments.json', 'utf8', function(err, data) {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        } else {
            var comments = JSON.parse(data);
            comments = comments.filter(function(comment) {
                return comment.id != req.params.id;
            });
            fs.writeFile(__dirname + '/public/data/comments.json', JSON.stringify(comments,

var express = require("express");
var app = express();
const port = 5000;
app.use(express.static('public'));


var stories = require("./StoryID.js");

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html")
  });

app.get('/storyTelling', function (req, res) {
  res.sendFile(__dirname + "/Story.html")
});

app.get('/api/Story/:id', function(req, res) {
  res.json(stories.ShowStory(req.params['id']));
});

app.listen(port, function () {
  console.log(`Server now listening on port ${port}!`);
});
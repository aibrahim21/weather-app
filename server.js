// requiring express to run server and routes
const express = require('express');
// start an instance of an app.
const app = express();
//dependancies
let bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
//app.use(bodyParser.json());
//app.use(cors());



// the app API endPoint
let projectData = {};

// creating the server
const port = 8080;
const server = app.listen(port, listening());

// function of the listen() method
function listening() {
  console.log(`the server is running , the port number is ${port}`);
};




app.use(express.static('website')); ///line that connects the server with the client



//get request server side

app.get('/all', function(req, res) {
  res.send(projectData);

});



//post request server side
app.post('/add', savedData)




function savedData(req, res) {
  //console.log(req.body);
  //console.log(req.body.temp);
  //console.log(req.body.date);
  //console.log(req.body.content);



  projectData["date"] = req.body.date;
  projectData["temp"] = req.body.temp;
  projectData["content"] = req.body.content;

  //console.log(`the data saved is ${projectData}`);
};

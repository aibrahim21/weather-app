// requiring express to run server and routes
const express = require('express');
// start an instance of an app.
const app = express();
//dependancies
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: false
}));
//app.use(bodyParser.json());
//app.use(cors());



// the app API endPoint
let projectData = {};

// creating the server
const port = 7000;
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
  console.log(req.body);
  newEntry = {
    date: req.body.date,
    temp: req.body.temp,
    content: req.body.content
  }
  projectData.push(newEntry);
  //projectData.date = req.body.date;
  //projectData.temperature = request.body.temp;
  //projectData.content = request.body.content;
  //res.end();
  //app.route('/add')
  //.get(function())

  /// .post(function());
  console.log(`the data saved is ${projectData}`);
};

//const baseURL = "https://api.openweathermap.org/data/2.5/weather?zip='";

////baseURL + zip + ',eg' + '&APPID=' + key
//const url = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=4d6b21b33101303dc0bab3f05dc200ed";
//app.get('/' ,function(req , res){
///request(url ,function(error , response , body){
///weatherJson= Json.parse(body);
//console.log(weatherJson);
//  res.render('weather');
//  });
///});

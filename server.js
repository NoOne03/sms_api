var express = require('express');
var app = express();
var http = require('http').createServer(app);
const dotenv = require('dotenv').config();
var bodyParser = require('body-parser');
var port = process.env.PORT || 5000
const client = require('twilio')(
	process.env.TWILIO_ACCOUNT_SID,
  	process.env.TWILIO_AUTH_TOKEN
	);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.post('/send_sms',(req,res)=>{
  res.header('Content-Type', 'application/json');
	client.messages.create({
		from: process.env.TWILIO_PHONE_NUMBER,
		to: req.body.to,
		body: `${req.body.referenceNumber} is your reference code for signing up as caretaker for ${req.body.name}\nClick on the link to download the app\n(Farji link)\nTeam EpiAlert`
	})
	.then(() => {
      res.send(JSON.stringify({ success: true }));
	}).catch(err => {
		console.log(err);
		res.send(JSON.stringify({success: false}));
	});
})

http.listen(port, () => {
	console.log("Server is running on port:" + port);
})
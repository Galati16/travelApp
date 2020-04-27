var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
    //hiding priva api key
const dotenv = require('dotenv');
dotenv.config();

//package for Api
var aylien = require("aylien_textapi");

//bodyParser middleware
const bodyParser = require('body-parser');


const app = express()
app.use(express.static('dist'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

console.log(__dirname)

var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

app.get('/', function(req, res) {
    res.sendFile('dist/index.html')
        //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function() {
    console.log('Example app listening on port 8080!')
})


app.get('/save', function(req, res) {
            res.json(mockAPIResponse);

            app.post("/analyze", (req, res) => {
                console.log('im analyze post:', )
                textapi.sentiment({
                    url: req.body.text
                }, function(error, response) {
                    res.send(response)
                    if (error === null) {
                        console.log(response);
                    }
                })
            });
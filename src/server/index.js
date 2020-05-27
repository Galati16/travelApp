var path = require('path')
const express = require('express')
const dotenv = require('dotenv');
dotenv.config();

//bodyParser middleware
const bodyParser = require('body-parser');


const app = express()
app.use(express.static('dist'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

console.log(__dirname)


app.get('/', function(req, res) {
    res.sendFile('dist/index.html')

});

// designates what port the app will listen to for incoming requests
module.exports = app.listen(8080, function() {
    //console.log('Example app listening on port 8080!')
});


app.post("/store", (req, res) => {
    console.log('im analyze post:', req.body)
    const data = req.body;
    res.send('okay');
});



app.get('/', function(req, res) {
    console.log(res);
})
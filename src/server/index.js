var path = require('path')
const express = require('express')
    //hiding priva api key
const dotenv = require('dotenv');
dotenv.config();

//package for Api


//bodyParser middleware
const bodyParser = require('body-parser');


const app = express()
app.use(express.static('dist'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

console.log(__dirname)

/* // for Geo
const geoNamesUser = process.env.GEODE_USERNAME;
const geoNameBaseURL = 'http://api.geonames.org/searchJSON?username=' + geoNamesUser + '&placename='

//http://api.geonames.org/searchJSON?q=london&maxRows=10&username=demo
//for WeatherIO:
const wioKey = process.env.WEATHERBIT_KEY;
//for PIXABAY
const pixabayKey = process.env.PIXABAY_KEY; */

app.get('/', function(req, res) {
    res.sendFile('dist/index.html')
        //res.sendFile(path.resolve('src/client/views/index.html'))
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function() {
    console.log('Example app listening on port 8080!')
});





/* async function getWebApiData(url) {
    const respond = await fetch(url)
    try {
        const data = await respond.json();
        console.log(data)
        return;
    } catch (error) {
        alert('Not a valid German zip code!Try something like 22559:)');
        console.log('error is:', error);
    }
}; */

app.post("/store", (req, res) => {
    console.log('im analyze post:', req.body)
    const data = req.body;
});
//getWebApiData(geoNameBaseURL + data.city);

/* textapi.sentiment({
    url: req.body.text
}, function(error, response) {
    res.send(response)
    if (error === null) {
        console.log(response);
    }
}) */

app.get('/', function(req, res) {
    console.log(res);
})
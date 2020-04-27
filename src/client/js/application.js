function interactWithServer(userData) {


    console.log("::: Form Submitted :::");
    fetch('http://localhost:8080/analyze', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        })
        /*         .then(function(res) {
                    return res.json()
                })
                .then(function(res) {
                    //document.getElementById("polarity").innerHTML = res.polarity + '   with a polarity confidence of ' + res.polarity_confidence;
                    //document.getElementById("subjectivity").innerHTML = res.subjectivity + '   with a subjectivity confidence of ' + res.subjectivity_confidence;
                    //document.getElementById("text").innerHTML = res.text;
                }) */
};

async function getWeather(userData, geoData) {
    // for weatherbit.io
    const key = 'c627a56641d3436e850950b7cf423119';
    const corsvar = 'https://cors-anywhere.herokuapp.com/';
    let url = ''
    if (userData.daysAway > 7) {
        url = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${geoData.lat}&lon=${geoData.lon}&key=${key}`;
        //console.log(url);
    } else {
        url = `https://api.weatherbit.io/v2.0/current?lat=${geoData.lat}&lon=${geoData.lon}&key=${key}`;
        //console.log(url)
    }

    console.log(url)
    const respond = await fetch(corsvar + url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:8080/',
        },
        credentials: 'same-origin',
    });
    try {
        const data = await respond.json();
        const weatherData = {
            Temp: data.data[0].temp,
            windSpeed: data.data[0].wind_spd,
            precip: data.data[0].precip,
            weatherDescription: data.data[0].weather.description
        }
        return weatherData
    } catch (error) {
        console.log('error is:', error);
    }

};

async function getLonLat(userData) {
    // for Geonames
    const corsvar = 'https://cors-anywhere.herokuapp.com/';
    const geoNameBaseURL = corsvar + 'http://api.geonames.org/wikipediaSearchJSON?username=fortunis&q='

    const respond = await fetch(geoNameBaseURL + userData.city, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:8080/',
        },
        credentials: 'same-origin',
    });
    try {
        const data = await respond.json();
        const GeoData = {
            lat: data.geonames[0].lat,
            lon: data.geonames[0].lng,
            country: data.geonames[0].countryCode
        }
        return GeoData
    } catch (error) {
        alert('City too small or spelled incorrectly!');
        console.log('error is:', error);
    }
};

/**
 * Define Global Variables
 * 
 */
const buttonElement = document.getElementById('getLocationData');
//const sections = document.getElementsByTagName('section');
//const numberOfSections = document.getElementsByTagName('section').length; //MEMO:=4
//const navLink = document.getElementsByTagName('li');

// Scroll to section on link click

buttonElement.addEventListener('click', function(evn) {
    evn.preventDefault();
    const userData = myLib.getFormValues();
    getLonLat(userData)
        .then(function(geoData) {
            getWeather(userData, geoData)
                .then(function(weatherData) {
                    console.log('hier unten', weatherData, geoData, userData);
                });

            //interactWithServer(userData);

        });
})
export { interactWithServer }
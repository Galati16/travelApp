/**
 * Send collected data from API's to local server.
 * @param {object} 
 */
function interactWithServer(allData) {

    fetch('http://localhost:8080/store', {
        method: 'POST',
        crededentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(allData)
    });
};

/**
 * gets background picture from https://pixabay.com
 * @param {object} userData
 */
async function getBackgroundPic(userData) {
    let picData = '';
    const API_KEY = '16246175-c1b47574cb1cde5e99fd86e69';
    const corsvar = 'https://cors-anywhere.herokuapp.com/';
    const url = 'https://pixabay.com/api/?key=' + API_KEY + '&q=' + encodeURIComponent(userData.city) + '&orientation=horizontal';

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
        picData = data.hits[1].webformatURL;
        return picData;
    } catch (error) {
        picData = 'https://pixabay.com/get/57e1d6434d51ad14f1dc84609629317c1139dfe2564c704c7c2f7ed59e4acd51_640.jpg'
        return picData
    }
};

/**
 * gets background picture from https://weatherbit.io
 * @param {object} userData
 * @param {object} geoData
 */
async function getWeather(userData, geoData) {
    const vars = myLib.helperDecideWeatherService(userData, geoData);

    const respond = await fetch(corsvar + vars.url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:8080/',
        },
        credentials: 'same-origin',
    });

    try {
        let data = await respond.json();
        const weatherData = {
            temp: data.data[vars.day].temp,
            windSpeed: data.data[vars.day].wind_spd,
            precip: data.data[vars.day].precip,
            weatherDescription: data.data[vars.day].weather.description,
            serviceType: vars.type
        };
        return weatherData
    } catch (error) {
        console.log('error is:', error);
    }
};

/**
 * gets background picture from http://api.geonames.org
 * @param {object} userData
 */
async function getLonLat(userData) {
    // for Geonames
    const corsvar = 'https://cors-anywhere.herokuapp.com/';
    const geoNameBaseURL = corsvar + 'http://api.geonames.org/wikipediaSearchJSON?username=fortunis&q=';

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
        };
        return GeoData
    } catch (error) {
        alert('City too small or spelled incorrectly!');
    }
};

/**
 * Define Global Variables 
 */
const corsvar = 'https://cors-anywhere.herokuapp.com/';
const buttonElement = document.getElementById('getLocationData');
const removeAll = document.getElementById('navi_buttons_left');

// remove all destination cards
removeAll.addEventListener('click', function(evn) {
    const allLocationCards = document.querySelectorAll('[id^=travelDest]');
    allLocationCards.forEach(element => element.remove());
});

//add a new travel location and store data on server
buttonElement.addEventListener('click', function(evn) {
    evn.preventDefault();
    const userData = myLib.getFormValues();
    getLonLat(userData)
        .then(function(geoData) {
            getWeather(userData, geoData)
                .then(function(weatherData) {
                    getBackgroundPic(userData)
                        .then(function(picData) {
                            //adjust html
                            myLib.addTravelDisToHtml(evn, { link: picData }, weatherData, geoData, userData);

                            //send Data to server:
                            const allData = {
                                city: userData.city,
                                startDay: userData.startDay,
                                endDay: userData.endDay,
                                daysAway: userData.daysAway,
                                lat: geoData.lat,
                                lon: geoData.lon,
                                country: geoData.country,
                                temp: weatherData.temp,
                                windSpeed: weatherData.windSpeed,
                                precip: weatherData.precip,
                                weatherDescription: weatherData.weatherDescription,
                                serviceType: weatherData.serviceType,
                                link: picData
                            };

                            interactWithServer(allData);
                        });
                });
        });
})


export {
    interactWithServer,
    getLonLat
}
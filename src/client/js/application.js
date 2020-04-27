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

async function getLonLat(userData) {
    // for Geo
    const corsvar = 'https://cors-anywhere.herokuapp.com/';

    const geoNameBaseURL = corsvar + 'http://api.geonames.org/wikipediaSearchJSON?username=fortunis&q='
    console.log(geoNameBaseURL + userData.city)

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
        console.log(data);
        console.log(data.geonames[0].lat, data.geonames[0].lng, data.geonames[0].countryCode);
        return
    } catch (error) {
        alert('Not a valid German zip code!Try something like 22559:)');
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
    getLonLat(userData);
    //interactWithServer(userData);

});

export { interactWithServer }
function getFormValues() {
    //read values from input fields:
    const city = document.getElementById('cityName').value.replace(/\s/g, '');
    const startDay = document.getElementById('startDate').value.replace(/\s/g, '');
    const endDay = document.getElementById('endDate').value.replace(/\s/g, '');
    //get value for timer 
    const daysAway = myLib.getDaysToTrip(startDay);
    const locationData = {
        city: city,
        startDay: startDay,
        endDay: endDay,
        daysAway: daysAway
    };
    return locationData
};

function getDaysToTrip(startDay) {

    var countDownDate = new Date(startDay).getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    return days;
};

function addTravelDisToHtml(picData, weatherData, geoData, userData) {
    const nrSections = document.getElementsByTagName('section').length
        //html to add:
    const htmlToAdd = ` <section id="travelDest${nrSections}" class="nested_pictures" > 
                        <div class="pictureHeader flexColumn" style="background: url(${picData.link})">
                             <H2> ${userData.city}, ${weatherData.country} </H2> 
                              <p > (${userData.startDay} to ${userData.endDay}) </p>
                              <p > Your trip is <span class = 'h2AlikeP'> ${userData.daysAway} </span> days away.</p>
                        </div>
                        <div class="data">
                            <H2> Typical Weather: </h2> 
                            <div class = "weatherBlock" >
                               <p > Temperature:<br> ${weatherData.temp}°C </p> 
                               <p > Precipitation: <br>${weatherData.precip} mm/h</p> 
                               <p > Wind Speed:<br> ${Math.round(weatherData.windSpeed*3.6)} Km/h </p> 
                            </div > 
                            <p style = "italic" >  ${weatherData.weatherDescription} </p>
                            <a id = "remove" class = "button" > Remove this travel location! </a>
                        </div> 
                    </section >`;
    document.getElementById('start').insertAdjacentHTML("afterend", htmlToAdd);
};

//style="background: rgba(0, 0, 0, 0) url(&quot;&quot;) repeat scroll 0% 0%;"
export {
    addTravelDisToHtml,
    getFormValues,
    getDaysToTrip
}
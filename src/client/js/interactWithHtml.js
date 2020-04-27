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
}

export {
    getFormValues,
    getDaysToTrip
}
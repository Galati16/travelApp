/**
 * Chooses between 'Forcast' and 'Current Weather' service of https://api.weatherbit.io
 * depending on the start day of travel
 */
function helperDecideWeatherService(userData, geoData) {
    let url = '';
    let i = 0;
    let serviceType = '';
    const key = 'c627a56641d3436e850950b7cf423119';

    if (userData.daysAway <= 5) {
        // Weather Forcast reliable:
        i = userData.daysAway;
        url = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${geoData.lat}&lon=${geoData.lon}&key=${key}`;
        serviceType = 'Forcast';
    } else {
        // Weather Forcast not reliable or not available:
        url = `https://api.weatherbit.io/v2.0/current?lat=${geoData.lat}&lon=${geoData.lon}&key=${key}`;
        serviceType = 'Current Weather';
    }

    const helper = {
        url: url,
        serviceType: serviceType,
        day: i
    }
    return helper
}

export {
    helperDecideWeatherService
}
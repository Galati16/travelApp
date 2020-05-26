import { helperDecideWeatherService } from '../src/client/js/helperfunctions.js'



test('get lon lat of city destination', () => {
    const userData = { city: 'Hamburg', daysAway: 5 };
    const geoData = { lat: 53.63212, lon: 9.988289, country: "DE" };
    expect(helperDecideWeatherService(userData, geoData)).toHaveProperty('serviceType', 'Forcast');
});

test('get lon lat of city destination', () => {
    const userData = { city: 'Hamburg', daysAway: 10 };
    const geoData = { lat: 53.63212, lon: 9.988289, country: "DE" };
    expect(helperDecideWeatherService(userData, geoData)).toHaveProperty('serviceType', 'Current Weather');
});
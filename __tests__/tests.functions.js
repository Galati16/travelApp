import { getDaysToTrip } from '../src/client/js/interactWithHtml.js'

test('get days to trip', () => {
    const dateToday = new Date().getTime();
    expect(getDaysToTrip(dateToday)).toBe(0);
});
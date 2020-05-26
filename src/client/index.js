import { interactWithServer } from './js/application.js'
import { getLonLat } from './js/application.js'
import { helperDecideWeatherService } from './js/helperfunctions.js'
import { getFormValues } from './js/interactWithHtml.js'
import { getDaysToTrip } from './js/interactWithHtml.js'
import { addTravelDisToHtml } from './js/interactWithHtml.js'


// import scss files:
//import './styles/resets.scss'
import './styles/base.scss'
import './styles/header.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/dynamic_screen_size.scss'

export {
    interactWithServer,
    getFormValues,
    getDaysToTrip,
    addTravelDisToHtml,
    getLonLat,
    helperDecideWeatherService
}
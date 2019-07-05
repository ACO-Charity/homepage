import { combineReducers } from 'redux'
import menu from './menuReducer'
import footer from './footerReducer'

export default combineReducers({
    menu,
    footer
})

import { combineReducers } from "redux";
import handleMyCounter from '../reducer/counterReducer'

const rootReducer = combineReducers( {
    handleMyCounter,
} )

export default rootReducer
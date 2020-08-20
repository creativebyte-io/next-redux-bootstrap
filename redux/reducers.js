import {SET_HEADING} from './actions'
import { combineReducers } from 'redux';
function commonReducer(state={heading:"Welcome to NextJS-Redux-Bootstrap"},action){
	switch(action.type){
		case SET_HEADING:
			return {heading:action.heading}
		default:
			return state;
	}
}
const combinedReducer = combineReducers({
	common:commonReducer,
});
export default combinedReducer;

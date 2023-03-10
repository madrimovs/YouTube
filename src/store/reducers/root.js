import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import favouriteReducer from "./favouriteReducer";

const rootReducer = combineReducers({
	favourite: favouriteReducer,
	counter: counterReducer,
});

export default rootReducer;

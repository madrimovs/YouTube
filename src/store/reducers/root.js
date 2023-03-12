import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import favouriteReducer from "./favouriteReducer";
import likedReducer from "./likedReducer";

const rootReducer = combineReducers({
	favourite: favouriteReducer,
	counter: counterReducer,
	liked: likedReducer,
});

export default rootReducer;

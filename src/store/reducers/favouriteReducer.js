import { FAVOURITE_HANDLER, REMOVE_HANDLER } from "../typeConstants/typeConstants";

const favouriteInitialState = {
	favouriteVideos: [],
};

const favouriteReducer = (state = favouriteInitialState, action) => {
	if (action.type === FAVOURITE_HANDLER) {
		const result = [...state.favouriteVideos];

		result.push(action.payload);

		return {
			favouriteVideos: result,
		};
	} else if (action.type === REMOVE_HANDLER) {
		const filteredArray = state.favouriteVideos.filter((video) => {
			if (video.id !== action.payload.id) {
				return true;
			}
		});

		return {
			favouriteVideos: filteredArray,
		};
	}
	return state;
};

export default favouriteReducer;

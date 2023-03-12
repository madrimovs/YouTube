import { LIKED_HANDLER, REMOVE_LIKED } from "../typeConstants/typeConstants";

const likedInitialState = {
	likedVideos: [],
};

const likedReducer = (state = likedInitialState, action) => {
	if (action.type === LIKED_HANDLER) {
		const result = [...state.likedVideos];

		result.push(action.payload);

		return {
			likedVideos: result,
		};
	} else if (action.type === REMOVE_LIKED) {
		const filteredArray = state.likedVideos.filter((video) => {
			if (video.id !== action.payload.id) {
				return true;
			}
		});

		return {
			likedVideos: filteredArray,
		};
	}
	return state;
};

export default likedReducer;

import { INCREMENT_HANDLER } from "../typeConstants/typeConstants";

const counterInitialState = {
	counter: 0,
};

function counterReducer(state = counterInitialState, action) {
	switch (action.type) {
		case INCREMENT_HANDLER:
			return {
				counter: state.counter + 1,
			};
	}

	return state;
}

export default counterReducer;

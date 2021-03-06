import { SIGNUP_SUCCESS, SIGNUP_FAIL } from "../actions/types";

const initialState = {
	token: localStorage.getItem("token"),
	isAuthenticated: null,
	loading: true,
	user: null
};

export default function(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case SIGNUP_SUCCESS:
			return {
				...state,
				...payload,
				isAuthenticated: true,
				loading: false
			};
		case SIGNUP_FAIL:
			localStorage.removeItem("token");
			return {
				...state,
				token: null,
				isAuthenticated: false,
				loading: false
			};
		default:
			return state;
	}
}

import { ADD_GROUP } from '../ActionTypes'

const initialState = [];

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_GROUP:
			return [...state, action.data];
		default:
			return state
	}
}

import { ADD_GROUP, DELETE_GROUP, EDIT_GROUP } from '../ActionTypes'
const initialState = {
	groups: [],
	groupsLoading: false,
}
export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_GROUP:
			const groups = state.groups.concat([action.data])
			return { ...state, groups}
		case EDIT_GROUP:
			return state.map(groups => {
				if (groups.id === action.id) {
					return {
						...groups,
						...action.data,
					};
				} else {
					return groups;
				}
			});
		case DELETE_GROUP:
			return state.filter(groups => groups.id !== action.id);

		default:
			return state
	}
}
import { ADD_GROUP } from '../ActionTypes'
const initialState = {
	groups: [],
	groupsLoading: false,
}
export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_GROUP:
			const groups = state.groups.concat([action.data])
			return { ...state, groups, groupsLoading: false }
		default:
			return state
	}
}
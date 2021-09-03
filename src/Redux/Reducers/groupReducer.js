import { ADD_GROUP, DELETE_GROUP, EDIT_GROUP } from "../ActionTypes";

const initialState = {
    groups: [],
    groupsLoading: false,
};

export default (state = initialState, action) => {
    let groups = [];
    switch (action.type) {
        case ADD_GROUP:
            groups = state.groups
                ? state.groups.concat([action.data])
                : [action.data];
            return { ...state, groups };

        case EDIT_GROUP:
            groups = state.groups.map((group) => {
                if (group?.id !== action.id) {
                    return group;
				} else {
                    return group[group?.id] = {...action.data, id: Date.now()};
                }
            });
            return { ...state, groups };

        case DELETE_GROUP:
            groups = state.groups.filter((group) => group?.id !== action?.id);
            return { ...state, groups };

        default:
            return state;
    }
};

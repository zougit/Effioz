import {ADD_GROUP,DELETE_GROUP,EDIT_GROUP} from '../ActionTypes'

export const addGroup = data => {
	return {
		type: ADD_GROUP,
		data: data,
	};
};

export const editGroup = (id,data) => {
	return {
		type: EDIT_GROUP,
		data: data,
		id: id,
	};
};

export const deleteGroup = id => {
	return {
		type: DELETE_GROUP,
		id: id,
	};
};

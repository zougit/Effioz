import {ADD_GROUP} from '../ActionTypes'

export const addGroup = data => {
	return {
		type: ADD_GROUP,
		data: data,
	};
};

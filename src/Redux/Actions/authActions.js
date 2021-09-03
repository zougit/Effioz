import { USER_LOGIN, USER_LOGOUT } from "../ActionTypes";

export const userLogin = () => {
	return {
		type: USER_LOGIN,
		name: "john",
        password: "root",
	};
};

export const userLogout = () => {
	return {
		type: USER_LOGOUT,
	};
};
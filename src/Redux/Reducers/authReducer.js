import { USER_LOGIN, USER_LOGOUT } from "../ActionTypes";

const initialState = {
    isLoggedIn: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            const auth = state.auth.map((user)=> {
                if (user.name !== action.name || user.password !== action.password){
                    return {isLoggedIn: true}
                } else {
                    return {isLoggedIn: false}
                }
            })
            console.log(isLoggedIn);
            return {...state, auth }
        
        case USER_LOGOUT:
            return {...state, isLoggedIn: false }

        default:
            return state;
    }
};
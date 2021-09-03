import AsyncStorage from '@react-native-community/async-storage'
import { createStore } from "redux";
import { persistStore, persistCombineReducers } from "redux-persist";
import authReducer from './Reducers/authReducer';
import groupReducer from "./Reducers/groupReducer"

const reducer = {
	groups: groupReducer,
	auth: authReducer,
}

const persistConfig = {
	key: "Effioz",
	storage: AsyncStorage,
};


const persistedReducer = persistCombineReducers(persistConfig, reducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
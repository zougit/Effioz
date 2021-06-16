import AsyncStorage from '@react-native-community/async-storage'
import { createStore } from "redux";
import { persistStore, persistCombineReducers } from "redux-persist";
import GroupReducers from "./Reducers/groupReducer"

const reducer = {
	grp: GroupReducers,
}

const persistConfig = {
	key: "Effioz",
	storage: AsyncStorage,
};


const persistedReducer = persistCombineReducers(persistConfig, reducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
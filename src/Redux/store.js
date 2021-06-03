import { createStore } from "redux";
import { persistStore, persistCombineReducers } from "redux-persist";
import FilesystemStorage from "redux-persist-filesystem-storage";
import GroupReducers from "./Reducers/groupReducer"

const reducer = {
	group: GroupReducers,
}

const persistConfig = {
	key: "Effioz",
	storage: FilesystemStorage,
};


const persistedReducer = persistCombineReducers(persistConfig, reducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
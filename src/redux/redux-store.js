import {combineReducers, createStore} from "redux";
import tariffReducer from "./tariff-reducer";

let reducers = combineReducers({
    tariffPage: tariffReducer
});

let store = createStore(reducers);

window.store = store;

export default store;
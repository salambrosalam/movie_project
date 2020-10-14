import {combineReducers, createStore} from "redux";
import {searchReducer} from "./searchReducer"

let reducers = combineReducers({
    searchFilms: searchReducer
});

let store = createStore(reducers);

export default store;


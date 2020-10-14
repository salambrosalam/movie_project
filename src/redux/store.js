import {combineReducers, createStore, applyMiddleware} from "redux";
import {searchReducer} from "./searchReducer"
import thunk from 'redux-thunk';


let reducers = combineReducers({
    searchFilms: searchReducer
});

let store = createStore(
  reducers,
  applyMiddleware(thunk),
);

export default store;

// state = {
//   searchFilms: {{ isFetch: {} }},
//   reducer: {initialState},
//   reducer: {initialState},
//   reducer: {initialState},
// }
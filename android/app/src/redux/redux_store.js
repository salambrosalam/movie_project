import React from "react"
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {movieReducer} from './movieReducer';


const store = createStore(movieReducer, applyMiddleware(thunk));

export default store;

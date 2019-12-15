import {combineReducers } from "redux";
import {reducerFetchAPI} from "./ReducerFetchData";

export var reducer=combineReducers({
    dataFetch:reducerFetchAPI
})
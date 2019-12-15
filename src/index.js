import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Introduce from "./Component/introduce";
import $ from "jquery";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";

import { reducer } from "./Reducer/Reducer";
import { watcherSagaFetchAPI } from "./Sagas/sagas";


var saga=createSagaMiddleware();

var store=createStore(reducer,applyMiddleware(saga));

saga.run(watcherSagaFetchAPI);
store.dispatch({type:"API_CALL_REQUEST"});

ReactDOM.render(<Introduce />, document.getElementById("root"));

import {legacy_createStore, combineReducers, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {reducer as adminReducer} from "./AdminRedux/reducer";

const rootReducer= combineReducers({adminReducer});

const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store= legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

export {store}; 
import {legacy_createStore, combineReducers, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {reducer as adminReducer} from "./AdminRedux/reducer";
import{ reducer as CartReducer} from "./CartRedux/CartReducer";

const rootReducer= combineReducers({adminReducer,CartReducer});


const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store= legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

export {store}; 
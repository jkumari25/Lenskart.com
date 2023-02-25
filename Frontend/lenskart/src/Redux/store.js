import {legacy_createStore, combineReducers, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {reducer as adminReducer} from "./AdminRedux/reducer";
import{ reducer as CartReducer} from "./CartRedux/CartReducer";

<<<<<<< HEAD

const rootReducer= combineReducers({adminReducer});
=======
const rootReducer= combineReducers({adminReducer,CartReducer});
>>>>>>> main

const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store= legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

export {store}; 
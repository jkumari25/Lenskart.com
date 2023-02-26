import {CART_DELETE_ERROR,CART_DELETE_LOADING,CART_DELETE_SUCCESS,CART_GET_ERROR, CART_GET_LOADING, CART_GET_SUCCESS,
    CART_UPDATE_ERROR,
    CART_UPDATE_LOADING,
    CART_UPDATE_SUCCESS,
  } from "./CartActionType";
  
  const CartInitialState = {
    loading: false,
    error: false,
    data: [],
  };
  
export const CartReducer = (state = CartInitialState, { type, payload }) => {
switch (type) {
    case CART_GET_LOADING: {
    return {
        ...state,
        loading: true,
        error: false,
    };
    }
    case CART_GET_ERROR: {
    return {
        ...state,
        loading: false,
        error: true,
    };
    }
    case CART_GET_SUCCESS: {
    return {
        ...state,
        loading: false,
        error: false,
        data: payload,
    };
    }
    case CART_UPDATE_LOADING: {
    return {
        ...state,
        loading: true,
        error: false,
    };
    }
    case CART_UPDATE_ERROR: {
    return {
        ...state,
        loading: false,
        error: true,
    };
    }
    case CART_UPDATE_SUCCESS: {
    return {
        ...state,
        loading: false,
        error: false,
    };
    }
    case CART_DELETE_LOADING: {
    return {
        ...state,
        loading: true,
        error: false,
    };
    }
    case CART_DELETE_ERROR: {
    return {
        ...state,
        loading: false,
        error: true,
    };
    }
    case CART_DELETE_SUCCESS: {
    return {
        ...state,
        loading: false,
        error: false,
    };
    }
    default:
    return state;
}
};
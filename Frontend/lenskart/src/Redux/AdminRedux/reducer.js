import * as types from "./actionType";

const initialState={
    product:[],
    isLoading: false,
    isError: false,
}

const reducer= (state= initialState, action) =>{
    const {type,payload}= action;
    switch(type){
        case types.GET_PRODUCT_DATA_REQUEST:
            return{
                ...state,
                isLoading: true,
            }
        case types.GET_PRODUCT_DATA_SUCCESS:
            return{
                ...state,
                isLoading: false,
                product:payload
            }
        case types.GET_PRODUCT_DATA_ERROR:
            return{
                ...state,
                isLoading: false,
                isError: true
            }
        default:
            return state;
    }
}

export {reducer};
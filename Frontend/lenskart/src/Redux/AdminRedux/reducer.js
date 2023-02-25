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
        case types.POST_PRODUCT_DATA_REQUEST:
            return{
                ...state,
                isLoading: true,
            }
        case types.POST_PRODUCT_DATA_SUCCESS:
            return{
                ...state,
                isLoading:false,
                isError: false,
            }
        case types.POST_PRODUCT_DATA_ERROR:
            return{
                ...state,
                isLoading:false,
                isError: true,
            }
        case types.DELETE_PRODUCT_DATA_REQUEST:
            return{
                ...state,
                isLoading:true,
            }
        case types.DELETE_PRODUCT_DATA_SUCCESS:
            return{
                ...state,
                isLoading:false,
                isError:false
            }
        case types.DELETE_PRODUCT_DATA_ERROR:
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        case types.PATCH_PRODUCT_DATA_REQUEST:
            return{
                ...state,
                isLoading:true,
            }
        case types.PATCH_PRODUCT_DATA_SUCCESS:
            return{
                ...state,
                isLoading:false,
                isError:false,
            }
        case types.PATCH_PRODUCT_DATA_ERROR:
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        default:
            return state;
    }
}

export {reducer};
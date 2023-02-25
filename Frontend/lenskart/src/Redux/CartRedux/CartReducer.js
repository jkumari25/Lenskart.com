import { GET_CART_ERR, GET_CART_REQ, GET_CART_SUCCESS } from "./CartActionType"


const inititalState={
    data:[],
    isLoading:false,
    isError:false
}

export const reducer =(state=inititalState,action)=>{
    const {type,payload} = action;
    switch(type){

        case GET_CART_REQ:
            return {
                ...state,
                isLoading:true
            }
        case GET_CART_SUCCESS:
            return {
                ...state,
                isLoading:false,
                data:payload
            }
        case GET_CART_ERR:
            return {
                ...state,
                isLoading:false,
                isError:true
            }

        default :
        return state
    }

}
import { GET_PRODUCT_ERROR, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./Product.actionType"
import axios from "axios"


const getRequestAction = () => {
    return { type: GET_PRODUCT_REQUEST }
}

const getSuccessAction = (payload) => {
    return { type: GET_PRODUCT_SUCCESS, payload }
}

const getErrorAction = () => {
    return { type: GET_PRODUCT_ERROR }
}





export const getData = (dispatch) => {

    dispatch(getRequestAction())

    axios.get("http://localhost:8080/all_Eyeglasses").then((res)=>{
        
        dispatch(getSuccessAction(res.data))
    }).catch((err)=>{
        dispatch(getErrorAction())
    })
}



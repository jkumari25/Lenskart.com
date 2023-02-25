import axios from "axios"
import { GET_CART_ERR, GET_CART_REQ, GET_CART_SUCCESS } from "./CartActionType"

const getReqAction=()=>{
    return {type:GET_CART_REQ}
}

const getSuccessAction=(payload)=>{
    return {type:GET_CART_SUCCESS,payload}
}

const getErrAction=()=>{
    return {type:GET_CART_ERR}
}

export const getData=(dispatch)=>{
    dispatch(getReqAction())
    axios.get("http://localhost:8080/all_Eyeglasses")
    .then((res)=>{
        // console.log(res.data)
        dispatch(getSuccessAction(res.data))
    }).catch((err)=>{
        dispatch(getErrAction())
    })
}
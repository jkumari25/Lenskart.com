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





export const getData =(param)=> (dispatch) => {

    dispatch(getRequestAction())

    axios.get("https://optic-data.vercel.app/all_Eyeglasses",param).then((res)=>{
        // console.log(res)
        dispatch(getSuccessAction(res.data))
    }).catch((err)=>{
        dispatch(getErrorAction())
    })
}



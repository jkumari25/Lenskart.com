import axios from "axios";
import * as types from "./actionType";

const getProduct= (params)=>(dispatch) =>{
 dispatch({type: types.GET_PRODUCT_DATA_REQUEST});
 return axios.get("http://localhost:3004/product",params)
 .then((res)=>{
    dispatch({type: types.GET_PRODUCT_DATA_SUCCESS, payload: res.data})
 })
 .catch((err) => {
    dispatch({type: types.GET_PRODUCT_DATA_ERROR})
 })
}

export {getProduct};
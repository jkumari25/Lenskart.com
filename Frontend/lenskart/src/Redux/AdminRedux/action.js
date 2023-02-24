import axios from "axios";
import * as types from "./actionType";

export const getProduct= (params)=>(dispatch) =>{
 dispatch({type: types.GET_PRODUCT_DATA_REQUEST});
 return axios.get("https://silly-tank-top-eel.cyclic.app/product",params)
 .then((res)=>{
    dispatch({type: types.GET_PRODUCT_DATA_SUCCESS, payload: res.data})
 })
 .catch((err) => {
    dispatch({type: types.GET_PRODUCT_DATA_ERROR})
 })
}


// export const deleteTodoData= (id) => (dispatch) =>{
//    dispatch({type:types.DELETE_PRODUCT_DATA_REQUEST})
//    return axios
//    .delete(`http://localhost:3004/product/${id}`)
//    .then((res) => {
//      dispatch({type: types.DELETE_PRODUCT_DATA_SUCCESS, payload: id})
//    })
//    .catch((err) =>{
//       dispatch({type:types.DELETE_PRODUCT_DATA_ERROR})
//    })
//  }
 
//  export const editTodoData= (id,payload) => (dispatch) =>{
//    dispatch({type:types.PATCH_PRODUCT_DATA_REQUEST})
//    return axios
//    .put(`http://localhost:3004/product/${id}`,payload)
//    .then((res) => {
//      dispatch({type: types.PATCH_PRODUCT_DATA_SUCCESS})
//    })
//    .catch((err) =>{
//       dispatch({type: types.PATCH_PRODUCT_DATA_ERROR})
//    })
//  }
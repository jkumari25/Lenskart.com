import axios from "axios";
import {
    CART_ADD_ERROR,
    CART_ADD_LOADING,
    CART_ADD_SUCCESS,
    CART_DELETE_ERROR,
    CART_DELETE_LOADING,
    CART_DELETE_SUCCESS,
    CART_GET_ERROR,
    CART_GET_LOADING,
    CART_GET_SUCCESS,
    CART_UPDATE_ERROR,
    CART_UPDATE_LOADING,
    CART_UPDATE_SUCCESS,
  } from "./CartActionType";

const deleteDataAPI = (id) => {
  let res = axios.delete(
    `https://optic-data.vercel.app/all_Eyeglasses/cart/${id}`
  );
  return res;
};

const getRequestAPI = async () => {
    let res = await axios.get("https://optic-data.vercel.app/all_Eyeglasses/cart");
    return res.data;
};

const patchDataAPI = (id, payload) => {
let res = axios.patch(
    `https://optic-data.vercel.app/all_Eyeglasses/cart/${id}`,
    payload
);
return res;
//   console.log(res);
};

const postDataAPI = (payload) => {
    let res = axios.post(
      `https://optic-data.vercel.app/all_Eyeglasses/cart`,
      payload
    );
    console.log(res.data);
    return res.data;
};

export const getCartData = async (dispatch) => {
    dispatch({ type: CART_GET_LOADING });
    try {
      let data = await getRequestAPI();
      // console.log(data);
      dispatch({ type: CART_GET_SUCCESS, payload: data });
    } catch (e) {
      dispatch({ type: CART_GET_ERROR });
    }
  };
  
  export const updateCartData = async (dispatch, id, payload) => {
    dispatch({ type: CART_UPDATE_LOADING });
    try {
      let data = await patchDataAPI(id, payload);
      console.log(data);
      dispatch({ type: CART_UPDATE_SUCCESS});
    } catch (e) {
      dispatch({ type: CART_UPDATE_ERROR });
    }
  };
  
  export const removeCartData = async (dispatch, id) => {
    dispatch({ type: CART_DELETE_LOADING });
    try {
      let data = await deleteDataAPI(id);
      console.log(data);
      dispatch({ type: CART_DELETE_SUCCESS });
    } catch (e) {
      dispatch({ type: CART_DELETE_ERROR });
    }
  };

// const getReqAction=()=>{
//     return {type:GET_CART_REQ}
// }

// const getSuccessAction=(payload)=>{
//     return {type:GET_CART_SUCCESS,payload}
// }

// const getErrAction=()=>{
//     return {type:GET_CART_ERR}
// }

// export const getData= (params) => (dispatch)=>{
//     dispatch(getReqAction())
//     axios.get("http://localhost:8080/all_Eyeglasses",params)
//     .then((res)=>{
//         // console.log(res.data)
//         dispatch(getSuccessAction(res.data))
//     }).catch((err)=>{
//         dispatch(getErrAction())
//     })
// }
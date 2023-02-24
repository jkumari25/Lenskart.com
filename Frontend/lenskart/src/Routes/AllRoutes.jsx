import React from 'react';
import {Routes,Route} from "react-router-dom";
import AdminSidebar from "../Components/Jagriti/AdminSidebar"
import AdminAddProduct from '../Pages/Jagriti/AdminAddProduct';
import CartItem from "../Components/Cart/CartItem";
import Checkout from '../Components/Checkout/Checkout';

const AllRoutes = () => {
  return (
   <Routes>
    <Route path="/admin" element={<AdminSidebar />} />
    <Route path="/addproduct" element={<AdminAddProduct />} />
    <Route path="/cart" element={<CartItem/>}/>
    <Route path="/checkout" element={<Checkout/>}/>
   </Routes>
  )
}

export default AllRoutes
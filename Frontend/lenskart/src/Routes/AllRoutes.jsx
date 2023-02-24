import React from 'react';
import {Routes,Route} from "react-router-dom";
import AdminSidebar from "../Components/Jagriti/AdminSidebar"
import AdminAddProduct from '../Pages/Jagriti/AdminAddProduct';
import Cart from "../Pages/Cart/cart";
import Checkout from '../Pages/Cart/Checkout';

const AllRoutes = () => {
  return (
   <Routes>
    <Route path="/admin" element={<AdminSidebar />} />
    <Route path="/addproduct" element={<AdminAddProduct />} />
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/address" element={<Checkout/>}/>
   </Routes>
  )
}

export default AllRoutes
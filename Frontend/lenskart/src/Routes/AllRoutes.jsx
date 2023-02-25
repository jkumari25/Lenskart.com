import React from 'react';
import {Routes,Route} from "react-router-dom";
import AdminSidebar from "../Components/Jagriti/AdminSidebar"
import AdminAddProduct from '../Pages/Jagriti/AdminAddProduct';
import AdminEditData from '../Pages/Jagriti/AdminEditData';
import Order from '../Pages/Jagriti/Order';
import User from '../Pages/Jagriti/Users';
import CartItem from "../Components/Cart/CartItem";
import Checkout from '../Components/Checkout/Checkout';
import Form from '../Components/Checkout/Address';
import Home from '../Home'
import Signup from '../Pages/Signup/Signup';

const AllRoutes = () => {
  return (
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/admin" element={<AdminSidebar />} />
    <Route path="/addproduct" element={<AdminAddProduct />} />
    <Route path="/product/:id" element={<AdminEditData />} />
    <Route path="/alluser" element={<User />} />
    <Route path="/allorder" element={<Order />} />
    <Route path="/cart" element={<CartItem/>}/>
    <Route path="/checkout" element={<Checkout/>}/>
    <Route path="/address" element={<Form/>}/>
    {/* <Route  path="/signup" element={<Signup/>}></Route> */}
   </Routes>
  )
}

export default AllRoutes
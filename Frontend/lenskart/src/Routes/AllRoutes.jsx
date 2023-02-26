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
import Login from '../Pages/Login/Login';


import Kids from "../Pages/kids/Kids";
import Payment from "../Components/Payment/Payment";
import SingleProductPage from '../Pages/SingleProductPage/SingleProductPage';
import Contact_Lens from '../Pages/Contact-lens/Contact_Lens';
import AdminLogin from '../Pages/Jagriti/AdminLogin';


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

    <Route path="/signup" element={<Signup/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/adminlogin" element={<AdminLogin />} />

    <Route path="/kids" element={<Kids/>}/>
    <Route path="/payment" element={<Payment/>}/>
    <Route path='/single/:id' element={<SingleProductPage/>}/>
    <Route path='/contact' element={<Contact_Lens/>}/>
  

   </Routes>
  )
}

export default AllRoutes
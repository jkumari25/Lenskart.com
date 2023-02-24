import React from 'react';
import {Routes,Route} from "react-router-dom";
import AdminSidebar from "../Components/Jagriti/AdminSidebar"
import AdminAddProduct from '../Pages/Jagriti/AdminAddProduct';
import AdminEditData from '../Pages/Jagriti/AdminEditData';
import Order from '../Pages/Jagriti/Order';
import User from '../Pages/Jagriti/Users';


const AllRoutes = () => {
  return (
   <Routes>
    <Route path="/admin" element={<AdminSidebar />} />
    <Route path="/addproduct" element={<AdminAddProduct />} />
    <Route path="/product/:id" element={<AdminEditData />} />
    <Route path="/alluser" element={<User />} />
    <Route path="/allorder" element={<Order />} />
   </Routes>
  )
}

export default AllRoutes
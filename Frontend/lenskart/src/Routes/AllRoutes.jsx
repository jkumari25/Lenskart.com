import React from 'react';
import {Routes,Route} from "react-router-dom";
import AdminSidebar from '../Components/Jagriti/AdminSidebar';
import AdminAddProduct from "../Pages/Jagriti/AdminAddProduct";
import AdminEditData from "../Pages/Jagriti/AdminEditData";
import User from '../Pages/Jagriti/Users';
import Order from "../Pages/Jagriti/Order";

const AllRoutes = () => {
  return (
   <Routes>
    <Route path="/admin" element={<AdminSidebar />} />
    <Route path="/addproduct" element={<AdminAddProduct />}/>
    <Route path="/product/:id" element={<AdminEditData />} />
    <Route path="/allorder" element={<Order />} />
    <Route path="/alluser" element={<User />} />
   </Routes>
  )
}

export default AllRoutes
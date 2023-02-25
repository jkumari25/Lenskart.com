import React from 'react'
import SideBar from '../../Components/Sidebar/SideBar'
import ProductList from '../ProductList/ProductList'
import style from './Kids.module.css'

const Kids = () => {
  return (
    <>
      <div className={style.Kids_Main_Div}>

        {/* First Img aat top ---> cool style , hot deals  */}
        <div className={style.CoolStyle_First_Img_Kids_Section}>
          <img src="https://static1.lenskart.com/media/desktop/img/Feb23/style/plp/PLP%20Camapaign%20-%20WEB%20(6).jpg" alt="cool" />
        </div>


        {/* Side-Bar and product list section main-div  */}
        <div className={style.Kids_SideBar_Product_Main_Container}>

          {/* Sidebar  */}
          <div>
            <SideBar />
          </div>

          {/* Product List  */}
          <div>
            <ProductList />
          </div>

        </div>



      </div>

    </>
  )
}

export default Kids
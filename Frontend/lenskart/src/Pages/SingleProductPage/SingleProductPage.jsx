import React, { useEffect, useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom"
import style from "./SingleProductPage.module.css"
import {  Button,  } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import TopNav from '../../Componets/Navbar/TopNav'
import Footer from "../../Componets/Footer/Footer"
import { getData } from '../../Redux/CartRedux/CartAction'
import axios from "axios"

const SingleProductPage = () => {

  const { id } = useParams()
  const [data, setData] = useState({})
  const [singleProduct,setSingleProduct] = useState([])
  const isLoading = useSelector((store) => store.ProductReducer.isLoading)
  const product = useSelector((store) => store.ProductReducer.product)
  const toast = useToast()
  const dispatch= useDispatch()

  // const handelCart=(item)=>{
 

  //   toast({
  //     title: 'Added To Cart.',
  //     position: 'top-center',
  //     status: 'success',
  //     duration: 2000,
  //     isClosable: true,
  //   })
  //   dispatch(getData(singleProduct))
  // }

  const handleAddToCart = () => {

    let cartItems = [];
    if (localStorage.getItem('cartItems')) {
      cartItems = JSON.parse(localStorage.getItem('cartItems'));
    }
    const selectedProduct = {
      product_name:singleProduct.product_name,
       _id: singleProduct._id, 
       product_image:singleProduct.product_image,
       product_price:singleProduct.product_price, 
       category: singleProduct.category, 
       strike_through: singleProduct.strike_through
      };
    cartItems.push(selectedProduct);
    localStorage.setItem('cartItems', JSON.stringify(cartItems)) 
    toast({
          title: 'Added To Cart.',
          position: 'top-center',
          status: 'success',
          duration: 2000,
          isClosable: true,
        })

      
  
  };

  useEffect(()=>{
   axios.get(`https://optic-data.vercel.app/all_Eyeglasses/${id}`)
   .then((res)=> setSingleProduct(res.data))
   .catch((err)=> console.log(err));
  },[])

useEffect(() => {
    let lensData = product.find((el) => el.id === +id)
    lensData && setData(lensData)
    
  }, [])

console.log(singleProduct)
// console.log(data+"Single")
  return (
    <>
        <TopNav />
      <div className={style.Single_Product_Page_Main_Container}>
        {/* img  */}
        <div className={style.Single_Product_Page_Img_Main_div}>
          <img src={data.product_image} alt="" />
          <hr />
        </div>

        <div className={style.Single_Product_Page_Product_Details_Main_Div}>

          <div className={style.Single_Product_Page_Tag_Name}>
            <h1>{data.tags}</h1>
            <AiOutlineHeart color='gray' size="30px" />
          </div>

          <h1 className={style.Single_Product_Page_Product_Name}>{data.product_name}</h1>

          <h3 className={style.Single_Product_Page_Product_Size}>{data.size}</h3>

          <h4 className={style.Single_Product_Page_Strike_Through}>{data.strike_through}</h4>

          <h2 className={style.Single_Product_Page_Price_Product}>Rs. {data.product_price}</h2>

          <div className={style.Single_Product_Page_Product_Frame_Lens}>
            <p>Frame</p>
            <p>+</p>
            <p>Lens</p>
          </div>


          <div className={style.Product_card_Suited_years_Img_section}>
            <img src="https://ds-static.lenskart.com/product_color_bubble_images/149864_bubble.png" alt="" />
            <img src="https://ds-static.lenskart.com/product_color_bubble_images/149863_bubble.png" alt="" />
            <img src="https://ds-static.lenskart.com/product_color_bubble_images/149878_bubble.png" alt="" />
          </div>


          <div className={style.Single_Product_Page_Add_To_cart_Button_Main_Section}>

            <Button colorScheme='messenger' width="full" onClick={handleAddToCart}>Add To Cart</Button>
            <Button colorScheme='pink' variant='solid' width="full">Add To Wishlist</Button>

          </div>

        </div>
      </div>
    <Footer />
    </>
  )
}

export default SingleProductPage
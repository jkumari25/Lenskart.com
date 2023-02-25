import React, { useEffect, useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { useParams } from "react-router-dom"
import style from "./SingleProductPage.module.css"
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'

const SingleProductPage = () => {

  const toast = useToast()

  const { id } = useParams()

  const product = useSelector((store) => store.product)
  const [data, setData] = useState({})

  useEffect(() => {
    let lensData = product.find((el) => el.id === +id)
    lensData && setData(lensData)
  }, [])

console.log(data)


  return (
    <>

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

            <Button colorScheme='messenger' width="full" onClick={() =>
              toast({
                title: 'Added To Cart.',
                position: 'top-center',
                status: 'success',
                duration: 2000,
                isClosable: true,
              })
            }>Add To Cart</Button>
            <Button colorScheme='pink' variant='solid' width="full">Add To Wishlist</Button>

          </div>

        </div>
      </div>

    </>
  )
}

export default SingleProductPage
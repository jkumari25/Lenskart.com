import React from 'react'
import style from "./ProductCard.module.css"
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { Link } from 'react-router-dom'



const ProductCard = ({ data }) => {

  return (
    <>
      <Link to={`/single/${data.id}`}>
        <div className={style.ProductCard_Main_section}>

          <div className={style.Product_card_Main_Img_section_Div}>
            <div>
              <img src={data.product_image} alt="hero" />
            </div>

            <div>
              <AiOutlineHeart color='gray' size="20px" />
            </div>

          </div>


          {/* Product Info Main DIv  */}
          <div className={style.Product_Card_Info}>

            {/* Rating */}
            <div className={style.Product_Card_Rating_Main_Div}>
              <div>
                <h4>{data.rating_value}</h4>
              </div>

              <div>
                <AiFillStar color='#329c92' size="15px" />
              </div>


            </div>

            {/* Product name */}
            <div className={style.Product_Card_Name_Heading}>
              <h1>{data.product_name}</h1>
            </div>


            {/* Suited For yer wise */}
            <div className={style.Product_card_Suited_years}>
              <div className={style.Suited_Heading}>
                {data.size}
              </div>

              <div className={style.Product_card_Suited_years_Img_section}>
                <img src="https://ds-static.lenskart.com/product_color_bubble_images/149864_bubble.png" alt="" />
                <img src="https://ds-static.lenskart.com/product_color_bubble_images/149863_bubble.png" alt="" />
                <img src="https://ds-static.lenskart.com/product_color_bubble_images/149878_bubble.png" alt="" />
              </div>
            </div>

            {/* Price */}
            <div className={style.Product_card_Price_Main_div}>
              <h1>₹{data.product_price} <span>₹200</span> <span>(+tax)</span></h1>
            </div>



          </div>


          {/* Offer  */}

          <div className={style.Product_Card_Offer_main_Div}>
            <p>BUY 1 GET 1 FREE</p>
          </div>


        </div>
      </Link>

    </>
  )
}

export default ProductCard
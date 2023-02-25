// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Caro.css";


import { Pagination, Navigation } from "swiper";

export default function Carousel(props) {

console.log(props.value)

  
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
       
  {props.value.map((ele,id)=>{return(
 <SwiperSlide key={id}>
 <div className="Car-div">
     <img
       src={ele.img}
       alt="pic"
     />
     <h3 className="pro-name">{ele.name}</h3>

     <div className="exp">
         Explore
     </div>
   </div>
 </SwiperSlide>

  )})}
        
      </Swiper>
    </>
  );
}

import React, { useEffect, useState } from 'react';
import { Box, Button, Center, Divider, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../Redux/CartRedux/CartAction';
import { CircularProgress } from "react-loading-indicators";
import { FaAngleRight } from "react-icons/fa";
import CartNull from "./CartNull";
import CartCard from './CartCard';
import TopNav from '../../Componets/Navbar/TopNav';
import Footer from '../../Componets/Footer/Footer';

const CartItem = () => {
  
  const dispatch = useDispatch()
  const ProductData = useSelector((store)=> store.CartReducer.data)
  
  const loadingData = useSelector((store)=> store.CartReducer.isLoading);


  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(items);
  }, []);

  const handleRemoveItem = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };
  
  
  useEffect(()=>{
    dispatch(getData)
  },[])

  console.log(ProductData)

  let total = 0;
  let tax = 420;
  let item = 0;
  for (let i = 0; i < cartItems.length; i++) {
    total += +cartItems[i].product_price;
  }
  let discountPrice = total - 1000;
  let finalPrice = discountPrice + tax;

  // console.log(ProductData,finalPrice);
  // console.log(loadingData);
  if (loadingData) {
    return (
      <>
        <Center>
          <CircularProgress className="spinner"/>
        </Center>
      </>
    );
  }
  if (cartItems.length === 0) {
    return <CartNull />;
  }

  return (
    <>
    <TopNav />
     <Box>
      <Flex
        w="80%"
        m="0px auto"
        h="auto"
        justifyContent={"space-between"}
        display={{ base: "row", lg: "flex" }}
      >
        {/* <CartCard /> */}
        <Box>
          <Text>
            Cart(<span>{cartItems.length  }</span>  items)
          </Text>
          {cartItems?.map((el) => (
            <CartCard
              key={el.id}
              {...el}
              // updateQuantity={updateQuantity}
              removeItem={handleRemoveItem}
            />
          ))}
        </Box>
        <Box>
          <Box border={"1px solid black"} borderRadius="20px" padding="30px">
            <Text>Bill Details</Text>
            <Box mt="25px">
              <Flex justifyContent={"space-between"} w="300px">
                <Text>Total Price</Text>
                <Text>{total}</Text>
              </Flex>{" "}
              <Flex justifyContent={"space-between"} w="300px" mt="5px"> 
                <Text>Total Offer Discount</Text>
                <Text>000</Text>
              </Flex>{" "}
              <Flex justifyContent={"space-between"} w="300px" mt="5px">
                <Text>Final Price</Text>
                <Text>{total}</Text>
              </Flex>{" "}
              <Flex justifyContent={"space-between"} w="300px" mt="5px">
                <Text>Total After Discount</Text>
                <Text>{discountPrice}</Text>
              </Flex>{" "}
              <Divider borderBottom={"1px dashed"} />
              <Flex justifyContent={"space-between"} w="300px" mt="5px">
                <Text>Tax</Text>
                <Text>{tax}</Text>
              </Flex>{" "}
              <Flex justifyContent={"space-between"} w="300px" mt="5px">
                <Text>Total payable</Text>
                <Text>{finalPrice}</Text>
              </Flex>
            </Box>
          </Box>
          <Box
            border={"1px solid black"}
            borderRadius="20px"
            padding="30px"
            mt="25px"
          >
            <Flex justifyContent={"space-between"} alignItems="center">
              <Box>
                <Text>Apply Coupon</Text>
                <Text>Check available offers</Text>
              </Box>
              <Box>
                <FaAngleRight />
              </Box>
            </Flex>
          </Box>{" "}
          <Box borderRadius="40px" padding="20px" mt="25px" bgColor={"#64dbad"}>
            <Center>
              <Link to="/checkout">
                <Text>Proceed To Checkout</Text>
              </Link>
            </Center>
          </Box>
        </Box>
      </Flex>
    </Box>
    <Footer />
    </>
  )
}

export default CartItem
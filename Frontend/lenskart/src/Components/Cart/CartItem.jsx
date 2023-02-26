import { Box, Center, Divider, Flex, Text } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import CartCard from "./CartCard";
import { useDispatch, useSelector } from "react-redux";
import { FaAngleRight } from "react-icons/fa";
import CartNull from "./CartNull";
import { getCartData, removeCartData, updateCartData } from "../../Redux/CartRedux/CartAction";
import axios from "axios";
const Cart = () => {
  const { data, loading } = useSelector((store) => store.CartReducer);
  const [cart,setCart] = useState([]);
  const dispatch = useDispatch();
  const updateQuantity = (id, payload) => {
      updateCartData(dispatch, id, payload).then(() => getCartData(dispatch));
    };
  const removeCartItem = (id) => {
      removeCartData(dispatch, id).then(() => getCartData(dispatch)); 
      // getCartData(dispatch);
  };
  const { id } = useParams();
  const getSingleCart = (id) => {
    let res = axios.get(`https://optic-data.vercel.app/all_Eyeglasses/${id}`);
    return res;
  }
  useEffect(() => {
    getCartData(dispatch);
    let SingleData = getSingleCart(id).then((el)=>setCart(el.data))
  }, []);
  let total = 0;
  let tax = 420;
  let item = 0;
  for (let i = 0; i < data.length; i++) {
    total += +data[i].product_price * +data[i].quantity;
    item += +data[i].quantity;
  }
  let finalPrice = total + tax;

  if (cart.length === 0) {
    return <CartNull />;
  }
  return (
    <Box>
      <Flex w="80%" m="0px auto" h="auto" justifyContent={"space-between"} display={{ base: "row", lg: "flex" }}>
        {/* <CartCard /> */}
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
              <Divider borderBottom={"1px dashed"} />
              <Flex justifyContent={"space-between"} w="300px" mt="5px">
                <Text>Gold Membership Discount</Text>
                <Text>000</Text>
              </Flex>{" "}
              <Flex justifyContent={"space-between"} w="300px" mt="5px">
                <Text>Total After Discount</Text>
                <Text>{total}</Text>
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
                <Text>Apply Coupan</Text>
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
  );
};

export default Cart;
import React from 'react';
import { Box, Center, Flex, Image, Input } from '@chakra-ui/react';

// import { Link, Navigate } from 'react-router-dom';

import {useContext} from "react";
import { AuthContext } from '../ContextApi/AuthContext';



const UpNav = () => {
 
const {isAuth,Authdata}=useContext(AuthContext);
console.log()
  return (
    <Flex justifyContent={"space-between"}>
        <Flex >
         <Center>
            <Image h="50px " w="200px" src='https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg' />
         </Center>
         <Center>
            <Image h="26px" ml="60px"src='https://static.lenskart.com/media/mobile/images/phone_number.svg'/>
         </Center>
        </Flex>
        <Flex >
        <Input w="500px"/>
        </Flex>
        <Flex justifyContent={"space-around"}  w="330px">
            <Center fontWeight={"400"} fontSize="13px" > Track Order</Center>
            <Flex>
              {isAuth===true?<Center fontWeight={"400"} fontSize="13px" >{Authdata[0].first_name}</Center>:
              <Box display={"flex"}>
                
                </Box>
                }
                {/* <Link to="/login" fontWeight={"400"} fontSize="13px">Sign In</Link>
                <Link  fontWeight={"400"} fontSize="13px">Sign Up</Link> */}
            </Flex>
            <Center fontWeight={"400"} fontSize="13px">Wishlist</Center>
            <Center fontWeight={"400"} fontSize="13px">Cart</Center>
         


        </Flex>

    </Flex>
  )
}

export default UpNav
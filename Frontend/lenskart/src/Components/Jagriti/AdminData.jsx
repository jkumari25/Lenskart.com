import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardBody, Flex, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react';
import {useDispatch, useSelector} from "react-redux";
import {getProduct} from "../../Redux/AdminRedux/action";
import {store} from "../../Redux/store";
import { BsStarHalf } from 'react-icons/bs';
import { AiFillEdit} from 'react-icons/ai';
import { MdDeleteSweep } from 'react-icons/md';

const AdminData = () => {
  const product= useSelector((store)=> store.adminReducer.product);
  console.log(product);
  const [data,setData]= useState("");
  
  const dispatch= useDispatch();

  useEffect(()=>{
  dispatch(getProduct())
  },[]);

  return (
   <Box ml={["40px"]} width={["70%", "80%", "90%", "100%"]} mt="10px">
      <Text style={{fontSize:"20px",fontWeight:"bold",color:"teal", fontFamily:"sans-serif"}}>
       All The Products Present Here
      </Text>
    <Grid
      mt="10"
      gap={5}
      templateColumns={["repeat(1, 1fr)","repeat(2, 1fr)","repeat(2, 1fr)","repeat(3, 1fr)"]}
     >
     {product.length>0 && product.map((ele)=>{
      return <GridItem key={ele.id}>
      <Card maxW="sm">
      <CardBody>
      <Image src={ele.main_image} width="100%" height="250px"/>
      <Stack mt="6" spacing="3">
      <Button size="sm" w="35%" gap="3px" borderRadius="10px">{ele.product_details_box}
      <BsStarHalf style={{color:"teal"}} />
      rating
      </Button>
      <Heading  size="sm" textAlign="left">{ele.product_details}</Heading>
      <Text textAlign="left" textColor="teal" fontWeight="bold">color {ele.color}</Text>
      <Box>
      <Flex gap="5px">
      <Text color="black" fontWeight="bold">Rs.{ele.price_text}</Text>
      <Text color="grey" textDecoration="line-through">Rs.{ele.prev_price}</Text>
      <Text color="grey">(+tax)</Text>
      </Flex>
      </Box>
      <Flex justifyContent="space-between">
      <Button color="teal" fontSize="28px"><AiFillEdit /></Button>
      <Button color="red.600" fontSize="28px"><MdDeleteSweep /></Button>
      </Flex>
      </Stack>
      </CardBody>
      </Card>
    </GridItem>
   })}
   </Grid>
   </Box>
   
  )
}

export default AdminData
import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardBody, Flex, Grid, GridItem, Heading, Image, Stack, Text,useToast } from '@chakra-ui/react';
// import {useDispatch, useSelector} from "react-redux";
// import {getProduct} from "../../Redux/AdminRedux/action";
// import {store} from "../../Redux/store";
import { BsStarHalf } from 'react-icons/bs';
import { AiFillEdit} from 'react-icons/ai';
import { MdDeleteSweep } from 'react-icons/md';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AdminData = () => {
  //const product= useSelector((store)=> store.adminReducer.product);
  //console.log(product);
  const [product,setProduct]= useState([]);
  const toast = useToast()
  
 // const dispatch= useDispatch();

 useEffect(()=>{
  getProduct()
    },[])
    const getProduct = async()=>{
      const res = await axios.get("https://silly-tank-top-eel.cyclic.app/product")
      setProduct(res.data)
    }

  // useEffect(()=>{
  //   dispatch(getProduct())
  //   },[]);
  

  const handleDelete= async(id) =>{
    if(window.confirm("Are you sure that you wanted to delete that Product")){
     const res = await axios.delete(`https://silly-tank-top-eel.cyclic.app/product/delete/${id}`)
     
       toast({
         position: "bottom-left",
         title: "Product deleted SuccessFully ",
         description: "SuccessFul.",
         status: "success",
         duration: 4000,
         isClosable: true,
       });
      getProduct()
    }
   }
 
  // width={["60%", "70%", "80%", "90%"]}

  return (
   <Box w="90%" h="auto" m="auto">
      <Text style={{fontSize:"40px",fontWeight:"bold",color:"black", fontFamily:"sans-serif"}}>
       Welcome to Admin Dashboard
      </Text>
    <Grid
      mt="10"
      gap={5}
      templateColumns={["repeat(1, 1fr)","repeat(1, 1fr)","repeat(2, 1fr)","repeat(3, 1fr)"]}
     >
     {product.length>0 && product.reverse().map((ele)=>{
      return <GridItem key={ele._id}>
      <Card maxW="md">
      <CardBody>
      <Image src={ele.product_image} width="100%" height="250px" borderRadius="lg"/>
      <Stack mt="6" spacing="3">
      <Button size="sm" w="35%" gap="3px" borderRadius="10px">{ele.rating_value}
      <BsStarHalf style={{color:"teal"}} />
      rating
      </Button>
      <Heading  size="sm" textAlign="left">{ele.product_name}</Heading>
      <Text textAlign="left" textColor="teal" fontWeight="bold">Size {ele.size}</Text>
      <Box>
      <Flex gap="5px">
      <Text color="black" fontWeight="bold">Rs.{ele.product_price}</Text>
      <Text color="grey" textDecoration="line-through">Rs.{ele.strike_through}</Text>
      <Text color="grey">(+tax)</Text>
      </Flex>
      </Box>
      <Box>
      <Flex gap="25px">
        <Button>{ele.tags}</Button>
        <Button>{ele.category}</Button>
      </Flex>
      </Box>
      <Flex justifyContent="space-between">
      <Link to={`/product/${ele.id}`}>
      <Button color="teal" fontSize="28px"><AiFillEdit /></Button>
      </Link>
      <Button color="red.600" fontSize="28px" onClick={()=> handleDelete(ele._id)}><MdDeleteSweep /></Button>
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
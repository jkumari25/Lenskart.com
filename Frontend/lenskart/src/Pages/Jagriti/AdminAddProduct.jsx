import { Box, Button, Center, Flex, FormLabel, Heading, Image, Input, Text, useToast } from '@chakra-ui/react'
// import axios from 'axios'
import React, { useState } from 'react'
// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
// import { addProductData, getProduct } from '../../Redux/AdminRedux/action'
// import { store } from '../../Redux/store'

const AdminAddProduct = () => {
  const [product_name,setProductName]= useState("");
  const [product_image,setProductImage]= useState("");
  const [product_price,setProductPrice]= useState(null);
  const [strike_through,setStrikeThrough]= useState(null);
  const [size,setSize]= useState(null);
  const [category,setCategory]= useState("");
  const [rating_value,setRatingValue]= useState("");

// const {product,isLoading}= useSelector((store) =>{
//   return{
//     product: store.adminReducer.product,
//     isLoading: store.adminReducer.isLoading
//   }
// })

    // const dispatch= useDispatch();
    const toast = useToast()
    const navigate=useNavigate()
  
    const handleLogout=()=>
    {
        localStorage.removeItem("token")
        navigate("/")
    }
 
    const handleAdd = (e) => {
      e.preventDefault()
      const prodata = {product_name,product_name,product_price,strike_through,product_image,category,size,rating_value}
  
      fetch('https://silly-tank-top-eel.cyclic.app/product/post', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(prodata),
      })
        .then((res) => {
          toast({
            position: "bottom-left",
            title: "Product Added SuccessFully ",
            description: "SuccessFul.",
            status: "success",
            duration: 4000,
            isClosable: true,
          });
          navigate('/admin')
        })
        .catch((err) => {
          console.log(err.message)
        })
    }

  
  return (
    <>
       <Flex bg="RGBA(0, 0, 0, 0.64)" color="white" justifyContent={["space-between","space-around"]} p={["20px 10px","20px 0px"]} boxShadow="2xl" >
         <Box><Link to={"/admin"}><Button bg="green.400">Go Back</Button></Link></Box>
         <Box><Heading>Add Product</Heading></Box>
         <Box><Button onClick={handleLogout} bg="red">Logout</Button></Box>
       </Flex>
     <Flex  gap="20px" w="80%" m={"auto"} mt="50px" flexDirection={["column","column","column","row"]}>
       <Box w={["100%","100%","100%","50%"]} p="20px" boxShadow={"2xl"} borderRadius="16px">
         <FormLabel fontSize="20px" fontStyle="revert">Image Url</FormLabel>
         <Input 
         value={product_image} 
         onChange={(e)=> setProductImage(e.target.value)}
         mt="5px" 
         mb="5px"
         size="lg"
         />
         <FormLabel fontSize="20px" fontStyle="revert">Product Name</FormLabel>
         <Input 
         value={product_name} 
         placeholder="Product Name" 
         onChange={(e)=> setProductName(e.target.value)}
         mt="5px" 
         mb="5px"
         size="lg" 
         />

         <FormLabel fontSize="20px" fontStyle="revert">Product Price</FormLabel>
         <Input 
         type={"number"} 
         value={product_price} 
         placeholder="Product Price" 
         onChange={(e) => setProductPrice(e.target.value)}
         mt="5px" 
         mb="5px"
         size="lg" 
         />

         <FormLabel fontSize="20px" fontStyle="revert">Product Off Price</FormLabel>
         <Input 
         type={"number"}
         value={strike_through} 
         placeholder="Product Off Price" 
         onChange={(e)=> setStrikeThrough(e.target.value)}
         mt="5px" 
         mb="5px"
         size="lg" 
         />

         <FormLabel fontSize="20px" fontStyle="revert">Product Category</FormLabel>
         <Input 
         value={category} 
         placeholder="Product Category"
        onChange={(e)=>setCategory(e.target.value)}
        mt="5px" 
         mb="5px"
         size="lg" 
        />
         
         <FormLabel fontSize="20px" fontStyle="revert">Frame Size</FormLabel>
         <Input 
         value={size} 
         placeholder="Frame Size" 
         onChange={(e)=> setSize(e.target.value)}
         mt="5px" 
         mb="5px"
         size="lg" 
         />

         <FormLabel fontSize="20px" fontStyle="revert">Product Rating</FormLabel>
         <Input 
         type={"number"}
         value={rating_value} 
         placeholder="Product Rating"
        onChange={(e)=>setRatingValue(e.target.value)}
         mt="5px" 
         mb="5px"
         size="lg" 
        />

         <Center>
          <Button onClick={handleAdd} mt="20px" bg="#00A3C4" fontSize="20px" fontStyle="revert">
            Add Product
          </Button> 
        </Center>

         
         
       </Box>

        <Flex w={["100%","100%","100%","50%"]} gap={10} p="20px" boxShadow={"2xl"} borderRadius="16px" flexDirection={["column","column","row","row"]} >
           <Image src={product_image} w="400px"/>
           <Box>
           <Text fontSize={20}>Brand: {product_name}</Text>
           <Text>Offer Price: ₹ {product_price} </Text>
           <Text textDecoration={"line-through"}>Price: ₹ {strike_through}</Text>
           <Text>Category :- {category}</Text>
           <Text>Frame Size:- {size}</Text> 
           <Text>Rating:- {rating_value}</Text> 
           </Box>
        </Flex>
     </Flex>  

    </>
  )
}

export default AdminAddProduct
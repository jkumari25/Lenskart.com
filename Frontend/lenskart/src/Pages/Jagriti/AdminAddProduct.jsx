import { Box, Button, Center, Flex, FormLabel, Heading, Image, Input, TagLabel, Text, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const AdminAddProduct = () => {

     const initalValue={
         name:"",
         image:"",
         price:null,
         offPrice:null,
         category:"",
         subCategory:"",
         rating:null,
         size:[]
     }
    const [current,setCurrent]=useState(initalValue)

    const toast = useToast()
    const nav=useNavigate()
    const handleLogout=()=>
    {
        localStorage.removeItem("token")
        nav("/")
    }
 
  
   
    const handleAdd=()=>
    {
        axios.post("https://snapdealbackend.onrender.com/products/addProduct",current,{headers:{token:localStorage.getItem("token")}}).then(r=>
        {
            if(r.data.msg)
            {
                toast({
                    title: 'Product',
                    description: r.data.msg,
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                  })
                setCurrent(initalValue);
            }
            else
            {
                toast({
                    title: 'Product',
                    description: r.data,
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                  })
            }
            
        })
    
    }
  
  return (
    <>
       <Flex justifyContent={["space-between","space-around"]} p={["20px 10px","20px 0px"]} boxShadow="2xl" >
         <Box><Link to={"/admin"}><Button>Go Back</Button></Link></Box>
         <Box><Heading>Add Product</Heading></Box>
         <Box><Button onClick={handleLogout}>Logout</Button></Box>
       </Flex>
     <Flex  gap="20px" w="95%" m={"auto"} mt="50px" flexDirection={["column","column","column","row"]}>
       <Box w={["100%","100%","100%","50%"]} p="20px" boxShadow={"2xl"} borderRadius="16px">
         <FormLabel>Image Url</FormLabel>
         <Input value={current.image} onChange={(e)=>setCurrent({...current,image:e.target.value})}/>
         <FormLabel>Product Name</FormLabel>
         <Input value={current.name} placeholder="Product Name" onChange={(e)=>setCurrent({...current,name:e.target.value})}/>
         <FormLabel>Product Price</FormLabel>
         <Input type={"number"} value={current.price} placeholder="Product Name" onChange={(e)=>setCurrent({...current,price:e.target.value})}/>

         <FormLabel>Product Off Price</FormLabel>
         <Input value={current.offPrice} placeholder="Product Off Price" onChange={(e)=>setCurrent({...current,offPrice:e.target.value})}/>

         <FormLabel>Product Category</FormLabel>
         <Input value={current.category} placeholder="Product Category" onChange={(e)=>setCurrent({...current,category:e.target.value})}/>

         <FormLabel>Product Sub Category</FormLabel>
         <Input value={current.subCategory} placeholder="Product Sub Category" onChange={(e)=>setCurrent({...current,subCategory:e.target.value})}/>

         <FormLabel>Product Size</FormLabel>
         <Input value={current.size} placeholder="Enter Product Size using ," onChange={(e)=>setCurrent({...current,size:[...(e.target.value.split(","))]})}/>

         <FormLabel>Rating</FormLabel>
         <Input value={current.rating} placeholder="Product Off Price" onChange={(e)=>setCurrent({...current,rating:e.target.value})}/>

         <Center><Button onClick={handleAdd} mt="20px" >Add Product</Button> </Center>

         
         
       </Box>

        <Flex w={["100%","100%","100%","50%"]} gap={10} p="20px" boxShadow={"2xl"} borderRadius="16px" flexDirection={["column","column","row","row"]} >
           <Image src={current.image} w="400px"/>
           <Box>
           <Text fontSize={20}>{current.name}</Text>
           <Text textDecoration={"line-through"}>₹ {current.price}</Text> <span>₹ {current.offPrice}</span>
           <Text>Category :- {current.category}</Text>
           <Text>Sub Category :- {current.subCategory}</Text>
           {current.size?<Flex gap={4}>Size :- {current.size.map((ele)=><span>{ele}</span>)}</Flex>:""}.
           </Box>
        </Flex>
     </Flex>  

    </>
  )
}

export default AdminAddProduct
import { Box, Button, Center, Flex, FormLabel, Heading, Image, Input, TagLabel, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const AdminEditData = () => {
  const [productid,setProductid]= useState("");
  const [product_name,setProductName]= useState("");
  const [product_image,setProductImage]= useState("");
  const [product_price,setProductPrice]= useState(null);
  const [strike_through,setStrikeThrough]= useState(null);
  const [size,setSize]= useState(null);
  const [category,setCategory]= useState("");
  const [product,setProduct]= useState([]);

    const {id}=useParams()
    const toast = useToast()
    const navigate=useNavigate()
    const handleLogout=()=>
    {
        localStorage.removeItem("token")
        navigate("/")
    }
 
    useEffect(() => {
      fetch("https://silly-tank-top-eel.cyclic.app/product" + id).then((res) => {
          return res.json();
      }).
      then((res) => {
          setProduct(res[0]);
          setProductid(res.productid);
          setProductName(res.product_name);
          setProductPrice(res.product_price);
          setStrikeThrough(res.strike_through);
          setProductImage(res.product_image);
          setSize(res.size);
          setCategory(res.category);
      })
      .catch((err) => {
          console.log(err.message);
      })
  }, []);
   
    const handleUpdate=()=> {
     
      const prodata={productid,product_name,product_price,strike_through,product_image,category,size};
      
      fetch("https://silly-tank-top-eel.cyclic.app/product/update"+ id,{
        method:"PATCH",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(prodata)
      })
      .then((res)=>{
        toast({
          position: "bottom-left",
          title: "Product Updated SuccessFully ",
          description: "SuccessFul.",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        navigate('/admin');
      })
      .catch((err)=>{
        console.log(err.message)
      })

    }
   
  return (
    <>
       <Flex justifyContent={["space-between","space-around"]} p={["20px 10px","20px 0px"]} boxShadow="2xl" >
         <Box><Link to={"/admin"}><Button>Go Back</Button></Link></Box>
         <Box><Heading>Edit Product</Heading></Box>
         <Box><Button onClick={handleLogout}>Logout</Button></Box>
       </Flex>
     <Flex  gap="30px" w="80%" m={"auto"} mt={"50px"} flexDirection={["column","column","column","row"]}>
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
         onChange={(e)=> setProductName(e.target.value) }     mt="5px"
          mb="5px"
          size="lg" 
          />
         <FormLabel fontSize="20px" fontStyle="revert">Product Price</FormLabel>
         <Input 
         type={"number"} 
         value={product_price} 
         placeholder="Product price" 
         onChange={(e)=> setProductPrice(e.target.value)} mt="5px" 
         mb="5px"
         size="lg" 
         />

         <FormLabel fontSize="20px" fontStyle="revert">Product Off Price</FormLabel>
         <Input 
         value={strike_through}
          placeholder="Product Off Price" 
          onChange={(e)=> setStrikeThrough(e.target.value) } mt="5px" 
          mb="5px"
          size="lg" 
          />

         <FormLabel fontSize="20px" fontStyle="revert">Frame Size</FormLabel>
         <Input 
         value={size} 
         placeholder="Enter new frame size" 
         onChange={(e)=> setSize(e.target.value)} 
         mt="5px" 
         mb="5px"
         size="lg" 
         />

         <FormLabel fontSize="20px" fontStyle="revert">Category</FormLabel>
         <Input 
         value={category} 
         placeholder="Enter new category" 
         onChange={(e)=> setCategory(e.target.value) } mt="5px" 
         mb="5px"
         size="lg"  
         />

        <Center>
          <Button onClick={handleUpdate} mt="20px" bg="teal" fontSize="20px" fontStyle="revert">Update Product</Button> 
        </Center>

         
         
       </Box>

        <Flex w={["100%","100%","100%","50%"]} flexDirection={["column","column","row","row"]} gap={10} p="20px" boxShadow={"2xl"} borderRadius="16px">
           <Image src={product_image} w="400px"/>
           <Box>
           <Text fontSize={20}>Brand: {product_name}</Text>
           <Text>₹ {product_price}</Text>
           <Text textDecoration={"line-through"}>₹ {strike_through}</Text>
           <Text>Frame Size: {size}</Text>
           <Text>Category:{category}</Text>
           </Box>
        </Flex>
     </Flex>  

    </>
  )
}

export default AdminEditData
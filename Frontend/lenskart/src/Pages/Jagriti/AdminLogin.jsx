import {   Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    Center,
    useToast, } from '@chakra-ui/react';
    import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const toast = useToast()
  const handleLogin = ()=>{
   
  
     if(email==="admin@gmail.com" && password ==="admin"){
        console.log("success")
        toast({
            position: "top",
            title: "Logined SuccessFull",
            description: "SuccessFul.",
            status: "success",
            duration: 4000,
            isClosable: true,
          });
          navigate("/admin")
     }else {
        console.log("fail")
        toast({
            title: `Error! Wrong Email or Password`,
            status: "error",
            isClosable: true,
            position: "top",
          });
     }
   
  }
  return (
    <Box>
        <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"} fontStyle="italic" color="green">
              Admin login
            </Heading>
            {/* <Text fontSize={"lg"} color={"gray.600"}>
            Login  to enjoy all of our cool features ✌
            </Text> */}
          </Stack>
          <Box rounded={"lg"} p={8}>
            <Stack spacing={4}>
              <HStack>
                {/* Facebook */}
                <Button
                  w={"full"}
                  colorScheme={"facebook"}
                  leftIcon={<FaFacebook />}
                >
                  <Center>
                    <Text>Login with Facebook</Text>
                  </Center>
                </Button>

                {/* Google */}
                <Button w={"full"} variant={"outline"} leftIcon={<FcGoogle />}>
                  <Center>
                    <Text>Login with Google</Text>
                  </Center>
                </Button>
              </HStack>
              <Text>OR</Text>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  focusBorderColor="green.400" 
                />
              </FormControl>

              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={showPassword ? "text" : "password"}
                  
                    
                    focusBorderColor="green.400"
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
              <Button size='lg' colorScheme='green' mt='24px' onClick={handleLogin}>
    Login
  </Button>
              </Stack>
              <Stack align="center" pt={6}>
               
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Box>
  )
}

export default AdminLogin
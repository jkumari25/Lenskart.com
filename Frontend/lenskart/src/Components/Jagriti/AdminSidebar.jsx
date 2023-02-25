import React, { useEffect, useState } from 'react';
import {
  Box, 
  Flex, 
  Text, 
  Icon,
  IconButton,
  Drawer,
  Input,
  InputLeftElement,
  Avatar,
  useDisclosure,
  useColorModeValue,
  InputGroup,
  DrawerContent,
  DrawerOverlay,
  Button,

} from "@chakra-ui/react";

import { FaBell } from 'react-icons/fa';
import { FiSearch,FiMenu } from 'react-icons/fi';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { HiCollection} from 'react-icons/hi';
import { MdHome } from 'react-icons/md';
import {HiOutlineViewGridAdd} from "react-icons/hi"
import {FaUsers} from "react-icons/fa"
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../Redux/AdminRedux/action';
import AdminData from './AdminData';
// import img from "./utils/logo.jpg";

const AdminSidebar = () => {
  const sidebar = useDisclosure();
  const color = useColorModeValue("grey.600", "grey.300");

  const product= useSelector((store)=> store.adminReducer.product);
  console.log(product);
  const [data,setData]= useState("");
  const navigate= useNavigate();
  
  const dispatch= useDispatch();

  const handleDelete= (id) =>{
    if (window.confirm('Do you want to remove?')) {
      fetch('http://localhost:3004/product/' + id, {
        method: 'DELETE',
      })
        .then((res) => {
          alert('Removed successfully.')
          window.location.reload()
        })
        .catch((err) => {
          console.log(err.message)
        })
    }
  }

  const handleLogout= ()=>{
    localStorage.removeItem("token")
        navigate("/")
  }

  useEffect(()=>{
  dispatch(getProduct())
  },[]);

  const NavItem = (props) => {
    const { icon, children, ...rest } = props;
    return (
      <Flex
        align="center"
        px="4"
        pl="4"
        py="3"
        cursor="pointer"
        color="inherit"
        _dark={{
          color: "gray.400",
        }}
        _hover={{
          bg: "#2C5282",
          _dark: {
            bg: "#2C5282",
          },
          color: "gray.900",
        }}
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
        {...rest}
      >
        {icon && (
          <Icon
            mx="2"
            boxSize="4"
            _groupHover={{
              color: color,
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    );
  };

  const SidebarContent = (props) => (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg="white"
      _dark={{
        bg: "black.800",
      }}
      border
      color="green"
      borderRightWidth="1px"
      w="60"
      backgroundColor="#90CDF4"
      {...props}
    >
      <Flex px="4" py="5" align="center">
        {/* <Logo /> */}
        <Text
          fontSize="4xl"
          ml="2"
          color="black"
          _dark={{
            color: "white",
          }}
          fontWeight="bold"
          fontStyle="sans-serif"
        >
         {/* <img src={img} alt="" /> */}
         Dashboard
        </Text>
        <br/>
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        <Link to="/admin">
        <NavItem icon={MdHome} fontSize="2xl" fontWeight="bold" color="black" borderRadius="5px" >Home</NavItem>
        </Link>
        <br/>
        <NavItem icon={HiCollection} fontSize="2xl" fontWeight="bold" color="black"  borderRadius="5px" >Collections</NavItem>
        <br/>
        <Link to="/addproduct">
        <NavItem icon={HiOutlineViewGridAdd} fontSize="2xl" fontWeight="bold"color="black" borderRadius="5px"  mt="10px">Add Product</NavItem>
        </Link>
        <br/>
        <Link to="/alluser">
        <NavItem icon={FaUsers} fontSize="2xl" fontWeight="bold" color="black" borderRadius="5px"  mt="10px">Users Info</NavItem>
        </Link>
        <br/>
        <Link to="/allorder">
        <NavItem icon={BsFillCartCheckFill} fontSize="2xl" fontWeight="bold" color="black"  borderRadius="5px" mt="10px">Orders</NavItem>
        </Link>
      </Flex>
    </Box>
    );
  return (
    <Box>
      <Box
        as="section"
       
        _dark={{
          bg: "gray.700",
        }}
        minH="100vh"
      >
        <SidebarContent
          display={{
            base: "none",
            md: "unset",
          }}
        />
        <Drawer
          isOpen={sidebar.isOpen}
          onClose={sidebar.onClose}
          placement="left"
        >
          <DrawerOverlay />
          <DrawerContent>
            <SidebarContent w="full" borderRight="none" />
          </DrawerContent>
        </Drawer>
        <Box
          ml={{
            base: 0,
            md: 60,
          }}
          transition=".3s ease"
        >
          <Flex
            as="header"
            align="center"
            justify="space-between"
            w="full"
            px="4"
            bg="white"
            _dark={{
              bg: "gray.800",
            }}
            borderBottomWidth="1px"
            borderColor="blackAlpha.300"
            h="14"
          >
            <IconButton
              aria-label="Menu"
              display={{
                base: "inline-flex",
                md: "none",
              }}
              onClick={sidebar.onOpen}
              icon={<FiMenu />}
              size="sm"
            />
          <InputGroup
            w="96"
            display={{
              base: "none",
              md: "flex",
            }}
            >
           
            <InputLeftElement color="gray.500">
              <FiSearch />
            </InputLeftElement>
            <Input placeholder="Search for products..." />
            </InputGroup>

          <Flex align="center" >
            <Icon color="gray.500" as={FaBell} cursor="pointer" />
            <Avatar
              ml="4"
              size="sm"
              name="anubra266"
              src="https://avatars.githubusercontent.com/u/30869823?v=4"
              cursor="pointer"
            />
            <Button ml="5px" color="red" onClick={handleLogout}>Logout</Button>
          </Flex>
          </Flex>
          <Box>
          <AdminData />
         </Box>
          </Box>
        </Box>
      </Box>
   
  );
};


export default AdminSidebar

{/*  */}

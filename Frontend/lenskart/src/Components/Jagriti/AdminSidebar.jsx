import React from 'react';
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
} from "@chakra-ui/react";

import { FaBell } from 'react-icons/fa';
import { FiSearch,FiMenu } from 'react-icons/fi';
import { BsGearFill } from 'react-icons/bs';
import { AiFillGift } from 'react-icons/ai';
import { HiCollection} from 'react-icons/hi';
import { FaHouseUser } from 'react-icons/fa';
import { MdHome } from 'react-icons/md';
import AdminData from './AdminData';
import {HiOutlineViewGridAdd} from "react-icons/hi"
import {FaUsers,FaUserPlus} from "react-icons/fa"
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  const sidebar = useDisclosure();
  const color = useColorModeValue("grey.600", "grey.300");

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
          bg: "gray.100",
          _dark: {
            bg: "gray.900",
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
      backgroundColor="teal.400"
      {...props}
    >
      <Flex px="4" py="5" align="center">
        {/* <Logo /> */}
        <Text
          fontSize="4xl"
          ml="2"
          color="purple.700"
          _dark={{
            color: "white",
          }}
          fontWeight="bold"
          fontStyle="sans-serif"
        >
          OpticKart
        </Text>
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        <NavItem icon={MdHome} fontSize="2xl" fontWeight="bold" color="purple.800" border="2px solid" borderRadius="5px" >Home</NavItem>
        {/* <NavItem icon={FaRss}>All Users</NavItem> */}
        <NavItem icon={HiCollection} fontSize="2xl" fontWeight="bold" color="purple.800" border="2px solid" borderRadius="5px" mt="10px">Collections</NavItem>
        <Link to="/addproduct">
        <NavItem icon={HiOutlineViewGridAdd} fontSize="2xl" fontWeight="bold"color="purple.800" border="2px solid" borderRadius="5px"  mt="10px">Add Product</NavItem>
        </Link>
        <NavItem icon={FaUsers} fontSize="2xl" fontWeight="bold" color="purple.800" border="2px solid" borderRadius="5px"  mt="10px">Users</NavItem>
        <NavItem icon={FaUserPlus} fontSize="2xl" fontWeight="bold" color="purple.800" border="2px solid" borderRadius="5px" mt="10px">Add User</NavItem>
      </Flex>
    </Box>
  );

  return (
    <Box
      as="section"
      bg="grey.50"
      _dark={{
        bg: "grey.700",
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
        <Text mt="5px" textAlign="left" ml="10px" style={{fontSize:"30px",fontWeight:"bold",color:"teal", fontFamily:"sans-serif"}}>
        Welcome! to Admin Pannel </Text>
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
          color="inherit"
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
            <Input placeholder="Search for articles..." />
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
          </Flex>
        </Flex>
        <Box as="main">
          <AdminData />
        </Box>
      </Box>
    </Box>
  );
};


export default AdminSidebar


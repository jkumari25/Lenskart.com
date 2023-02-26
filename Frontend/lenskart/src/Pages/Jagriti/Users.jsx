import { 
  Box,
  Icon,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  IconButton, 
  Card, 
  CardBody, 
  Flex, 
  Grid, 
  GridItem, 
  Heading, 
  Stack, 
  useToast,
  Image,
  Text, 
  useDisclosure, 
  useColorModeValue 
} from '@chakra-ui/react'
import axios from 'axios'
import { FiMenu } from 'react-icons/fi';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { HiCollection} from 'react-icons/hi';
import { MdHome } from 'react-icons/md';
import {HiOutlineViewGridAdd} from "react-icons/hi"
import {FaUsers} from "react-icons/fa"
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import img from "../../Components/Jagriti/utils/User.logo.jpg";
 
const User = () => {
  const sidebar = useDisclosure();
  const color = useColorModeValue("grey.600", "grey.300");

    const [data , setData] = useState("");
    console.log(data);
    const toast = useToast()
    
    useEffect(()=>{
      getUser()
     },[])
      
  
    const getUser = async()=>{
      const res = await axios.get("https://silly-tank-top-eel.cyclic.app/user")
      setData(res.data)
    }

    
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
          <Heading   > Welcome Admin</Heading> 
          </Flex>

          <Box>
      <Heading>Active Users</Heading>
      <Box w="full" h="auto" bg="#BEE3F8">
          <Grid
              p="5"
              mt="10"
              gap={5}
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
              ]}
            >
              {data.length > 0 && data.map((item) => (
                  <GridItem key={item._id}>
                     
                    <Card maxW="sm">
                      <CardBody>
                        <Image
                          src={img}
                          alt="Green double couch with wooden legs"
                          borderRadius="lg"
                        />
                        <Stack mt="6" spacing="3">
                          <Heading size="md"  cursor="pointer">User Name : {item.name} {item.last}</Heading>
                          <Text color="black" cursor="pointer">email : {item.email}</Text>
                        </Stack>
                        
                      </CardBody>
                    </Card>
                  </GridItem>
                ))}
            </Grid>
          </Box>
    </Box>
        </Box>
      </Box>
    </Box>
   
  )
}

export default User
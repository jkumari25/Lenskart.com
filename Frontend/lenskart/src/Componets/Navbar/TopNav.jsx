import React, { useContext, useEffect, useState } from 'react';
import {Text,Image,Box, HStack,Avatar, Heading, Flex,} from '@chakra-ui/react';
import Styles from './TopNav.module.css'
import Hover from './Hover'
import { useSelector } from 'react-redux'
// import Login from '../Login'
// import Signup from '../Signup'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  
  PopoverBody,
 
} from '@chakra-ui/react'

// import {Navigate} from "react-router-dom"
import {TriangleDownIcon} from "@chakra-ui/icons";
import { Link } from 'react-router-dom';
import img from "../../assets/logo.jpg"

import {
    Drawer,
    
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure
  } from '@chakra-ui/react'
  import {
    Accordion,
    
  } from '@chakra-ui/react'
  import { FiMenu } from "react-icons/fi";
 
import { AuthContext } from '../../ContextApi/AuthContext';
import Login from '../../Pages/Login/Login';
import Signup from '../../Pages/Signup/Signup';
const TopNav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()
  
    const {isAuth,Authdata}=useContext(AuthContext)

    let name=JSON.parse(localStorage.getItem("name"));
   
    let [uName,setUname]=useState("");
    let n = useSelector((store)=>store.AuthReducer.name)
    console.log(name,uName,n);
       useEffect(()=>{
        setUname(name)
       },[name,n])

    return(

        <div className={Styles.tn_div_1} style={{width:'100%'}}>
            <div className={Styles.tn_div_2} style={{width:'100%'}}>
            <Box bg="#FFFFFF" mt="0.5%">
                <Box bg="" pb="0.5%" mb="0.5%">
                    <Box display="flex" fontFamily="sans-serif"  ml="0.3%" bg="">
                        <Link> <Text fontSize="70%" color="#000042">Do More, Be More</Text></Link>
                        <Text fontSize="100%" mt="-0.8%" p="0.4%">|</Text>
                        <Link to=""><Text fontSize="63%" color="#000042" p="">Try in 3D</Text></Link>
                        <Text fontSize="100%" mt="-0.8%" p="0.4%">|</Text>
                        <Link><Text fontSize="63%" color="#000042">Store Location</Text></Link>
                        <Text fontSize="100%" mt="-0.8%" p="0.4%">|</Text>
                        <Link> <Text fontSize="63%" color="#000042">Quality</Text></Link>
                        <Text fontSize="100%" mt="-0.8%" p="0.4%">|</Text>
                        <Link><Text fontSize="63%" color="#000042">USA</Text></Link>
                        <Text fontSize="100%" mt="-0.8%" p="0.4%">|</Text>
                        <Link><Text fontSize="63%" color="#000042">Singapore</Text></Link>
                        <Text fontSize="100%" mt="-0.8%" p="0.4%">|</Text>
                        <Link><Text fontSize="63%" color="#000042">UAE</Text></Link>
                        <Text fontSize="100%" mt="-0.8%" p="0.4%">|</Text>
                        <Link><Text fontSize="63%" color="#000042">John Jacobs</Text></Link>
                        <Text fontSize="100%" mt="-0.8%" p="0.4%">|</Text>
                        <Link><Text fontSize="63%" color="#000042">Aqualens</Text></Link>
                        <Text fontSize="100%" mt="-0.8%" p="0.4%">|</Text>
                        <Link><Text fontSize="63%" color="#000042">Cobrowsing</Text></Link>
                        <Text fontSize="100%" mt="-0.8%" p="0.4%">|</Text>
                        <Link><Text fontSize="63%" color="#000042">Engineering Blog</Text></Link>
                    </Box>
                </Box>
               
                <Box display="flex" p="0% 1.5%">
                <Link to="/">
                    <Box w="14%" cursor="pointer" ml="-1%" bg=""> 
                    <Image w="100%" h="100%" src={img} alt='Lenskart' />
                    </Box>
                    </Link>
                    <Box width="10%" ml="5%" bg="">
                        <Image h="100%" width="100%"  src="https://static.lenskart.com/media/mobile/images/phone_number.svg" alt="ph-no"></Image>
                    </Box>
                   
                    <Box p="0.6%" bg="" w="55%" ml="1%">
                        <Box border="1px" h="100%"  w="100%" borderRadius="5px" borderColor="#000042" bg="#FFFFFF">
                            <Text color="grey" ml="2%" mt="0.3%">What are you looking for</Text>
                        </Box>
                    </Box>
                    <Box  fontSize="13px" fontFamily="sans-serif" w="30%" ml="5%">
                        <Box pt="5%" display="flex" justifyContent="space-between" color={'black'}>                      
                            Track order
                            
                            <Box  display="flex">
                            <Flex>
              {isAuth===true?
              <Popover trigger="hover">
              <PopoverTrigger>
                <Box fontWeight={"400"} fontSize="13px" mt="-2px" >{Authdata[0].first_name}<TriangleDownIcon ml="2px" fontSize={"9px"} _hover={{transform: "rotate(180deg)"}}/> </Box>
              </PopoverTrigger>
              <PopoverContent w="200px" boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}>
                
               
              
                <PopoverBody display={"flex"} flexDirection="column" h={"160px"} justifyContent="space-between" >
               
                
            </PopoverBody>
              </PopoverContent>
            </Popover>
              
              :
              <Box display={"flex"} >
                
                </Box>
                }

                {name?<Text>{name}</Text>:<Box><Login/>
                <Signup/></Box>}
                
                 <Link to="/adminlogin">
                <Text>Admin</Text>
                </Link>
                {/* <Link to="/login" fontWeight={"400"} fontSize="13px" ml="5px">Sign In</Link>
                <Link to="/signup"  fontWeight={"400"} fontSize="13px" ml="10px">Sign Up</Link> */}
            </Flex>
                             </Box>
                            <Box display="flex" cursor="pointer">
                                <Image h="75%" src="https://static.lenskart.com/media/desktop/img/wishlist.png" alt="icon"></Image>
                                <Text ml="15%">Wishlist</Text>
                            </Box>
                            <Link to="/cart">
                            <Box display="flex" cursor="pointer">
                                <Image h="65%" src="https://static.lenskart.com/media/desktop/img/cart.png" alt="icon"></Image>
                                <Text ml="15%" >Cart</Text>
                            </Box>
                            </Link>
                        </Box>
                    </Box>
                </Box>
                <HStack fontWeight="bold" bg="#FBF9F7" fontFamily="sans-serif" h="65px" w="" position="relative">
                    <Hover/>
                    <Box spacing="5px" w="" display="flex" alignItems="center" left="82%" gap="3%" h="100%" position="absolute">
                        <Image h="55%" w="35%" borderRadius="5px" cursor="pointer" src="https://static1.lenskart.com/media/desktop/img/May22/3dtryon1.png" alt="try on 3D"></Image>
                        <Image h="55%" w="35%" borderRadius="5px" cursor="pointer" src="https://static1.lenskart.com/media/desktop/img/Mar22/13-Mar/blulogo.png" alt="BLU"></Image>
                        <Image h="55%" w="35%" borderRadius="5px" cursor="pointer" src="https://static.lenskart.com/media/desktop/img/Feb22/18-Feb/goldlogo.jpg" alt="GOLD"></Image>
                    </Box>
                </HStack>
            </Box>
            </div>
            <div className={Styles.mobView}>
                <Button leftIcon={<FiMenu />} colorScheme='teal' onClick={onOpen}></Button>
                <Drawer isOpen={isOpen} placement='left' initialFocusRef={firstField} onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent w="1000px" bg="#27394E">
                <DrawerCloseButton />
                <DrawerHeader borderBottomWidth='1px'>
                <div className={Styles.div1} style={{borderBottom:"2px solid #18CFA8",padding:"5%"}}>
                  <div className={Styles.div2}>
                    <Avatar src='https://bit.ly/broken-link' /> 
                    <div className={Styles.div3}>
                        <h3 style={{color:"white",marginTop:"10px"}}>Hi Yogi</h3>
                        <Link color="#CCCCCC" fontSize="50%" mt="5%">Enjoy Buy 1 Get 1 offer for 365 days</Link>
                    </div>
                  </div>
                  <Button bg="#00BAC6" w="100%" h="32px" mt="5%" color="#FFFFFF">GET GOLD MEMBERSHIP</Button>
                </div>
                  <Box display="flex" flexDirection="column">
                      <Link color="white" mt="10%" borderBottom="1px solid #526171" pb="5%" fontSize="72%">My Orders</Link>
                      <Link color="white" mt="6%" borderBottom="1px solid #526171" pb="5%" fontSize="72%">Manage Notification</Link>
                      <Link color="white" mt="6%" borderBottom="3px solid #526171" pb="5%" fontSize="72%">Contact Us</Link>
                  </Box>
                  <Heading mt="15%" color="white" fontSize="80%">HIGHLIGHTS</Heading>
                  <Box display="flex" flexDirection="column">
                    <Link color="white" mt="6%" borderBottom="1px solid #526171" pb="5%" fontSize="72%">Check Frame Size</Link>
                    <Link color="white" mt="6%" borderBottom="1px solid #526171" pb="5%" fontSize="72%">Gold Membership</Link>
                    <Link color="white" mt="6%" borderBottom="1px solid #526171" pb="5%" fontSize="72%">Try Frames in 3D</Link>
                    <Link color="white" mt="6%" borderBottom="1px solid #526171" pb="5%" fontSize="72%">Dowloads Apps</Link>
                  </Box>
                  <Heading mt="15%" color="white" fontSize="80%">SHOP NOW</Heading>
                  <Box  display="flex" flexDirection="column">
                    <Link color="white" mt="6%" borderBottom="1px solid #526171" pb="5%" fontSize="72%">Men</Link>
                    <Link color="white" mt="6%" borderBottom="1px solid #526171" pb="5%" fontSize="72%">Women</Link>
                    <Link color="white" mt="6%" borderBottom="1px solid #526171" pb="5%" fontSize="72%">Kids</Link>
                  </Box>
                  <Heading mt="15%" color="white" fontSize="80%">Our Services</Heading>
                  <Box  display="flex" flexDirection="column">
                    <Link color="white" mt="6%" borderBottom="1px solid #526171" pb="5%" fontSize="72%">Free Home Trail</Link>
                    <Link color="white" mt="6%" borderBottom="1px solid #526171" pb="5%" fontSize="72%">Home Eye check-up</Link>
                    <Link color="white" mt="6%" borderBottom="1px solid #526171" pb="5%" fontSize="72%">Store Locator</Link>
                  </Box>
                  <Heading mt="15%" color="white" fontSize="80%">International</Heading>
                  <Box  display="flex" flexDirection="column">
                    <Link color="white" mt="6%" borderBottom="1px solid #526171" pb="5%" fontSize="72%">Singapore</Link>
                    <Link color="white" mt="6%" borderBottom="1px solid #526171" pb="5%" fontSize="72%">USA</Link>
                    <Link color="white" mt="6%" borderBottom="1px solid #526171" pb="5%" fontSize="72%">UAE</Link>
                  </Box>
                  <Heading mt="15%" color="white" fontSize="80%">FAQ's & POLICIES</Heading>
                  <Box  display="flex" flexDirection="column">
                    <Link color="white" mt="6%" borderBottom="1px solid #526171" pb="5%" fontSize="72%">Frequently Asked Questions</Link>
                    <Link color="white" mt="6%" borderBottom="1px solid #526171" pb="5%" fontSize="72%">Cancellation & Return Policy</Link>
                    <Link color="white" mt="6%" borderBottom="1px solid #526171" pb="5%" fontSize="72%">Cobrowsing</Link>
                  </Box>
                  <Box mt="15%">
                      <Link color="white" mt="6%" borderBottom="1px solid #526171" pb="5%" fontSize="72%">Logout</Link>
                  </Box>
                  <Accordion allowMultiple>
                  </Accordion>
                </DrawerHeader>
          </DrawerContent>
      </Drawer>
    
    </div>
        </div>
    )
}
export default TopNav;
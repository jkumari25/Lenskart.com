// import { Box } from '@chakra-ui/react';
import React from 'react';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaInstagram,FaDove,FaFacebookF } from "react-icons/fa";
import './Footer.css'
import {Text,Image,Box,Link } from '@chakra-ui/react';
const Footer = () => {
    return(
        <div>
            <Box>
                <Box w="100%" h="500px" bg="#000042" fontFamily="sans-serif" pl="95px" pr="95px">
                    <Box>
                        <Text fontSize="32px" color="#F4F4F4" m="20px 0px 10px" p="0px 0px 15px" fontWeight="medium">Buy The Bext Eyewear From Lenskart</Text>
                    </Box>
                    <Box>
                        <Text color="#FCFCFC" fontSize="14px" m="0px 0px 10px">
                            Lenskart Is The Leading E-Commerce Portal For Eyewear In India. It Has Revolutionised The Eyewear Industry In The 
                            Country With Its Omni-Channel Approach. From An Ever-Growing Number Of Offline Stores Across Major Cities In The 
                            Country To Innovative Integration Of Technology While Purchasing Online, Lenskart Caters To Every Customer With 
                            Several Deals And Offers.
                        </Text>
                    </Box>
                    <Box>
                        <Text color="#FCFCFC" fontSize="14px" m="0px 0px 10px">
                        A One-Stop Online Solution For Purchasing Eyewear And Its Accessories, Lenskart Delivers Them Right At Your Doorstep With 
                        Convenient Methods Of Payment. <Link color="#329C92">Sunglasses</Link> As Well As <Link color="#329C92">Eyeglasses</Link> Are Available For Men And Women In A 
                        Diverse Array Of Styles And Trendy Colours. If You Want To Try Out <Link color="#329C92">Contact Lenses</Link>, Pick The Ones Of Your Choice 
                        From The Extensive Variety Of Coloured Contact Lenses From Our Online Store.
                        </Text>
                    </Box>
                    <Box color="#FFFFFF" fontSize="16px" p="0px 0px 8px" display="flex" gap="27%">
                        <Box display="flex" gap="200%" cursor="pointer">
                            <Text>
                                SUNGLASSES 
                            </Text>
                            <Text w="150%" h="100%">
                                <AiOutlinePlusCircle size="25px" fontWeight="700"/>
                            </Text>
                        </Box>
                        <Box display="flex" gap="200%" cursor="pointer">
                            <Text>
                                EYEGLASSES
                            </Text>
                            <Text >
                                <AiOutlinePlusCircle  _hover={{
                                                    background: "red",
                                                    color: "teal.500",
                                                    border:"1px solid red"
                                                }}/>
                            </Text>
                        </Box>
                        <Box display="flex" gap="140%" cursor="pointer">
                            <Text>
                                CONTACTLENSES
                            </Text>
                            <Text >
                                <AiOutlinePlusCircle/>
                            </Text>
                        </Box>
                    </Box>
                    <Box display="flex" gap="8%">
                        <Text border='1px' borderColor='gray.200' w="30%"></Text>
                        <Text border='1px' borderColor='gray.200' w="30%"></Text>
                        <Text border='1px' borderColor='gray.200' w="30%"></Text>
                    </Box>
                    <Box display="flex" mb="2%">
                        <Box display="flex" fontFamily="sans-serif" w="60%" mt="2%" gap="20%">
                            <Box>
                                <Text color="#F4F4F4" fontSize="20px" mb="3%">Services</Text>
                                <Text color="#FFFFFF" fontSize="12px" mb="3%" cursor="pointer">Store Locator</Text>
                                <Text color="#FFFFFF" fontSize="12px" mb="3%" cursor="pointer">Enter My Power</Text>
                                <Text color="#FFFFFF" fontSize="12px" mb="3%" cursor="pointer">Buying Guide</Text>
                                <Text color="#FFFFFF" fontSize="12px" mb="3%" cursor="pointer">Frame Size</Text>
                            </Box>
                            <Box>
                                <Text color="#F4F4F4" fontSize="20px" mb="3%">About Us</Text>
                                <Text color="#FFFFFF" fontSize="12px" mb="3%" cursor="pointer">We Are Hiring</Text>
                                <Text color="#FFFFFF" fontSize="12px" mb="3%" cursor="pointer">Refer & Earn</Text>
                                <Text color="#FFFFFF" fontSize="12px" mb="3%" cursor="pointer">About Us</Text>
                                <Text color="#FFFFFF" fontSize="12px" mb="3%" cursor="pointer">Lenskart Coupons</Text>
                            </Box>
                            <Box>
                                <Text color="#F4F4F4" fontSize="20px" mb="3%" >Help</Text>
                                <Text color="#FFFFFF" fontSize="12px" mb="3%" cursor="pointer">FAQ's</Text>
                            </Box>

                        </Box>
                        <Box h="30%" w="25%" bg="" mt="2%" ml="14%">
                            <Box  display="flex" flexDirection="column" p="5%">
                                <Box display="flex" flexDirection="row" gap="2%" bg="" pl="18%">

                                <Image src="https://static.lenskart.com/media/desktop/img/play-store.svg">
                                </Image>
                                <Image src="https://static.lenskart.com/media/desktop/img/app-store.svg"></Image>
                                </Box>

                                <Box color="#FCFCFC" fontSize="14px" fontFamily="" mt="5%" bg="">
                                    <Text ml="12">Download Lenskart App to buy</Text>
                                    <Text ml="4%">Eyeglasses, Sunglasses and Contact Lenses</Text>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box  border='1px' borderColor='gray.200' w="100%"></Box>
                    <Box display="flex" gap="16%" mt="2%" cursor="pointer">
                        <Box color="#FFFFFF" fontSize="14px" display="flex" bg="" w="40%" gap="8%">
                            <Box>T & C</Box>
                            <Box>Privacy</Box>
                            <Box>Desclaimer</Box>
                        </Box>
                        <Box color="#FFFFFF" display="flex" bg="" w="30%" gap="10%" ml="13%" pl="10%">
                            <Box fontSize="18px" fontWeight="bold">FOLLOW US AT</Box>
                            <Box>
                                <FaFacebookF/>
                            </Box>
                            <Box>
                                <FaInstagram/>
                            </Box>
                            <Box>
                                <FaDove/>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}
export default Footer;
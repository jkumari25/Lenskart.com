import React from "react";
import './hover.css'
import { Avatar, Wrap, WrapItem, Image, Heading, Box, Text } from '@chakra-ui/react'
import { AiOutlineRight } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

function Hover() {
    const Navigate = useNavigate();
    const change = () => {
        Navigate("")


    }

    return (

        <div className='MainMenu'>
            <ul>
                <li onClick={change}>EYEGLASSES
                    <div className='SubMenu_1'>
                        <div className='SubMenu_2'>
                            <div>SELECT CATEGORY</div>
                            <p>Our Top Pics</p>
                            <p>Frame Type</p>
                            <p>Collection</p>
                            <p>Brands</p>
                        </div>
                        <div className="hr_Line"></div>
                        <div className='SubMenu_3'>
                            <Wrap direction="column" >
                                <WrapItem display="flex">
                                    <Avatar mt="20px" name='Dan Abrahmov' src='https://static.lenskart.com/media/desktop/img/men_pic.png' alt="men" />
                                    <div className="Men_menu">Men</div>
                                    <div className="Greater_icon_men">
                                        <AiOutlineRight size="10px" />
                                    </div>
                                    <div className="Heading_1">CLASSIC EYE-GLASSES
                                        <p>Starting From ₹ <span>1199</span></p>
                                    </div>
                                    <div className="Greater_icon_men_2">
                                        <AiOutlineRight />
                                    </div>
                                    <div className="nextPara_1">
                                        <div className="subPara_1"> New Arrivals</div>
                                        <div className="subPara_1">Best Seller</div>
                                        <div className="subPara_1">Lenskart BLU lenses</div>
                                        <div className="subPara_1">Trending</div>
                                        <div className="subPara_1">Tinted Eyeglasses</div>
                                        <div className="subPara_1">Computer Eyeglasses</div>
                                        <div className="subPara_1">Progressive Eyeglasses</div>
                                    </div>
                                </WrapItem>
                                <WrapItem>
                                    <Avatar mt="-130px" name='Kola Tioluwani' src='https://static.lenskart.com/media/desktop/img/women_pic.png' alt="women" />
                                    <div className="Women_menu">Women</div>
                                    <div className="Greater_icon_women">
                                        <AiOutlineRight />
                                    </div>
                                    <div className="Heading_2">PREMIUM EYE-GLASSES
                                        <p>Starting From ₹ <span>3000</span></p>
                                    </div>
                                    <p className="via">
                                    </p>
                                    <div className="Greater_icon_women_2">
                                        <AiOutlineRight />
                                    </div>
                                    <div className="nextPara_2">
                                        <div className="subPara_2">Rectangle Frames</div>
                                        <div className="subPara_2">Wayfarer Frames</div>
                                        <div className="subPara_2">Round Frames</div>
                                        <div className="subPara_2">Aviator Frames</div>
                                        <div className="subPara_2">Cat-Eye Frames</div>
                                        <div className="subPara_2">Rimless Frames</div>
                                        <div className="subPara_2">Half Rim Frames</div>
                                        <div className="subPara_2">Geometric Frames </div>
                                    </div>
                                </WrapItem>
                                <WrapItem>
                                    <Avatar mt="-100px" name='Kent Dodds' src='https://static.lenskart.com/media/desktop/img/kid_pic.png' alt="kid" />
                                    <div className="Kids_menu">Kids</div>
                                    <div className="Greater_icon_kids">
                                        <AiOutlineRight />
                                    </div>
                                    <div className="Heading_3">COMPUTER EYE-GLASSES
                                        <p>Starting From ₹ <span>1299</span></p>
                                    </div>
                                    <div className="Greater_icon_kids_2">
                                        <AiOutlineRight />
                                    </div>
                                    <div className="nextPara_3">
                                        <div className="subPara_3">Crystal Clear</div>
                                        <div className="subPara_3">Gradient</div>
                                        <div className="subPara_3">Sleek Steel</div>
                                        <div className="subPara_3">Switch - Magnetic Clips-On</div>
                                        <div className="subPara_3">Air Flex</div>
                                        <div className="subPara_3">Air Wrap</div>
                                        <div className="subPara_3">Classic Acetate</div>
                                        <div className="subPara_3">Series A</div>
                                    </div>

                                </WrapItem>
                            </Wrap>
                        </div>
                    </div>
                </li>

                <li>
                    COMPUTER GLASSES
                    <div className='SubMenu_1'>
                        <div className='SubMenu_2' >
                            <div>SELECT CATEGORY</div>
                        </div>
                        <div className="hr_Line2"></div>
                        <div className='SubMenu_3'>
                            <Wrap direction="column" >
                                <WrapItem display="flex">
                                    <Avatar mt="20px" name='Dan Abrahmov' src='https://static.lenskart.com/media/desktop/img/men_pic.png' alt="men" />
                                    <div className="Men_menu">Men</div>
                                    <div className="Greater_icon_men">
                                        <AiOutlineRight />
                                    </div>
                                    <div className="Heading_1">Blu 0 Computer Glasses
                                        <p>Starting From ₹ <span>1299</span></p>
                                    </div>
                                    <div className="Greater_icon_men_2">
                                        <AiOutlineRight />
                                    </div>
                                </WrapItem>
                                <WrapItem>
                                    <Avatar mt="30px" name='Kola Tioluwani' src='https://static.lenskart.com/media/desktop/img/women_pic.png' alt="women" />
                                    <div className="Computer_WomenMenu">Women</div>
                                    <div className="Computer_Greater_icon_women">
                                        <AiOutlineRight />
                                    </div>
                                    <div className="Computer_Heading_2">PREMIUM RANGE
                                        <p>Starting From ₹ <span>3000</span></p>
                                    </div>
                                    <p className="via">
                                    </p>
                                    <div className="Computer_Greater_icon_women_2">
                                        <AiOutlineRight />
                                    </div>
                                </WrapItem>
                                <WrapItem>
                                    <Avatar mt="20px" name='Kent Dodds' src='https://static.lenskart.com/media/desktop/img/kid_pic.png' alt="kid" />
                                    <div className="Computer_KidsMenu">Kids</div>
                                    <div className="Computer_Greater_icon_kids">
                                        <AiOutlineRight />
                                    </div>
                                </WrapItem>
                            </Wrap>
                        </div>
                    </div>
                </li>

                {/* Kids  */}
                <li>

                    <Link to="/kids">
                        KIDS GLASSES
                        <div className='SubMenu_1'>
                            <div className='SubMenu_2'></div>
                            <div className='SubMenu_3'>
                                <div className="kids_Section">
                                    <div className="image_1">
                                        <img className="img_1" src="https://static1.lenskart.com/media/desktop/img/May22/glasses.jpg" alt="kidsIcon_1" />
                                        <div>Eye Glasses</div>
                                    </div>
                                    <div className="image_2">
                                        <img className="img_2" src="https://static1.lenskart.com/media/desktop/img/May22/computer-glasses.jpg" alt="kidsIcon_2" />
                                        <div>Zero Power Computer Glasses</div>
                                    </div>
                                    <div className="image_3">
                                        <img className="img_3" src="https://static1.lenskart.com/media/desktop/img/May22/Sunnies.jpg" alt="kidsIcon_3" />
                                        <div>Sun Glasses</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </li>

                {/* Contact lens */}

                <li>
                    <Link to="/contact">
                        CONTACT LENSES
                        <div className='contactGlasses_SubMenu_1'>
                            <div className='contactGlasses_SubMenu_2'>
                                <div>Brands</div>
                                <p>Explore by Disposability</p>
                                <p>Explore by Power</p>
                                <p>Explore by Colors</p>
                                <p>Solution</p>
                            </div>
                            <div className="hr_Line3"></div>
                            <div className='contactGlasses_SubMenu_3'>
                                <Wrap direction="column" >
                                    <WrapItem display="flex">
                                        <div className="contactGlasses_nextPara_1">
                                            <div className="contactGlasses_subPara_1"> Aqualens</div>
                                            <div className="contactGlasses_subPara_1">Bausch Lomb</div>
                                            <div className="contactGlasses_subPara_1">Johnson & Johnson</div>
                                            <div className="contactGlasses_subPara_1">Soflens</div>
                                            <div className="contactGlasses_subPara_1">Acuvue</div>
                                            <div className="contactGlasses_subPara_1">Alcon</div>
                                            <div className="contactGlasses_subPara_1">Air Optix</div>
                                            <div className="contactGlasses_subPara_1">Pure Vision</div>
                                        </div>
                                    </WrapItem>
                                    <WrapItem display="flex">
                                        <div className="contactGlasses_nextPara_2">
                                            <div className="contactGlasses_subPara_2">  Monthly</div>
                                            <div className="contactGlasses_subPara_2">Day & Night</div>
                                            <div className="contactGlasses_subPara_2">Daily</div>
                                            <div className="contactGlasses_subPara_2">Yearly</div>
                                            <div className="contactGlasses_subPara_2">Bi-weekly</div>
                                        </div>
                                    </WrapItem>
                                    <WrapItem display="flex">
                                        <div className="contactGlasses_nextPara_3">
                                            <div className="contactGlasses_subPara_3">Spherical - CYL</div>
                                            <div className="contactGlasses_subPara_3">Spherical + CYL</div>
                                            <div className="contactGlasses_subPara_3">Cylindrical Power</div>
                                            <div className="contactGlasses_subPara_3">Toric Power</div>
                                        </div>
                                    </WrapItem>
                                    <WrapItem display="flex">
                                        <div className="contactGlasses_nextPara_4">
                                            <div className="contactGlasses_subPara_4">Green</div>
                                            <div className="contactGlasses_subPara_4">Blue</div>
                                            <div className="contactGlasses_subPara_4">Brown</div>
                                            <div className="contactGlasses_subPara_4">Turquoise</div>
                                            <div className="contactGlasses_subPara_4">View all colors</div>
                                        </div>
                                    </WrapItem>
                                    <WrapItem display="flex">
                                        <div className="contactGlasses_nextPara_5">
                                            <div className="contactGlasses_subPara_5">Small</div>
                                            <div className="contactGlasses_subPara_5">Large</div>
                                            <div className="contactGlasses_subPara_5">View all solutions</div>
                                        </div>
                                    </WrapItem>
                                </Wrap>
                            </div>
                        </div>
                    </Link>
                </li>


                {/* Sun Glasses */}

                <li>
                    SUN GLASSES
                    <div className='sunGlasses_SubMenu_1'>
                        <div className='sunGlasses_SubMenu_2'>
                            <div>SELECT CATEGORY</div>
                            <p>Our Top Pics</p>
                            <p>Shape</p>
                            <p>Collection</p>
                            <p>Brands</p>
                            <hr />
                        </div>
                        <div className="hr_Line4"></div>
                        <div className='sunGlasses_SubMenu_3'>
                            <Wrap direction="column" >
                                <WrapItem display="flex">
                                    <Avatar mt="20px" name='Dan Abrahmov' src='https://static.lenskart.com/media/desktop/img/men_pic.png' alt="men" />
                                    <div className="sunGlasses_Men_menu">Men</div>
                                    <div className="sunGlasses_Greater_icon_men">
                                        <AiOutlineRight />
                                    </div>
                                    <div className="sunGlasses_Heading_1">CLASSIC EYE-GLASSES
                                        <p>Starting From ₹ <span>1199</span></p>
                                    </div>
                                    <div className="sunGlasses_Greater_icon_men_2">
                                        <AiOutlineRight />
                                    </div>
                                    <div className="sunGlasses_nextPara_1">
                                        <div className="sunGlasses_subPara_1"> New Arrivals</div>
                                        <div className="sunGlasses_subPara_1">Best Seller</div>
                                        <div className="sunGlasses_subPara_1">Pilot Style</div>
                                        <div className="sunGlasses_subPara_1">Power Sunglasses</div>
                                        <div className="sunGlasses_subPara_1">Polarized Sunglasses</div>
                                    </div>
                                </WrapItem>
                                <WrapItem>
                                    <Avatar mt="-45px" name='Kola Tioluwani' src='https://static.lenskart.com/media/desktop/img/women_pic.png' alt="women" />
                                    <div className="sunGlasses_Women_menu">Women</div>
                                    <div className="sunGlasses_Greater_icon_women">
                                        <AiOutlineRight />
                                    </div>
                                    <div className="sunGlasses_Heading_2">PREMIUM EYE-GLASSES
                                        <p>Starting From ₹ <span>3000</span></p>
                                    </div>
                                    <p className="sunGlasses_via">
                                    </p>
                                    <div className="sunGlasses_Greater_icon_women_2">
                                        <AiOutlineRight />
                                    </div>
                                    <div className="sunGlasses_nextPara_2">
                                        <div className="sunGlasses_subPara_2">Aviator</div>
                                        <div className="sunGlasses_subPara_2">Rounders</div>
                                        <div className="sunGlasses_subPara_2">Wayfarer</div>
                                        <div className="sunGlasses_subPara_2">Rectangle</div>
                                        <div className="sunGlasses_subPara_2">Hexagon</div>
                                        <div className="sunGlasses_subPara_2">Cat-Eye</div>
                                        <div className="sunGlasses_subPara_2">Clubmaster</div>
                                    </div>
                                    <div className="sunGlasses_nextPara_3">
                                        <div className="sunGlasses_subPara_3">Glam Slam</div>
                                        <div className="sunGlasses_subPara_3">Havana</div>
                                        <div className="sunGlasses_subPara_3">Polarized</div>
                                        <div className="sunGlasses_subPara_3">Power Sunglasses</div>
                                        <div className="sunGlasses_subPara_3">Designer Sunglasses</div>
                                    </div>
                                    <div className="sunGlasses_nextPara_4">
                                        <div className="sunGlasses_subPara_4">Vincent Chase</div>
                                        <div className="sunGlasses_subPara_4">John Jacobs</div>
                                        <div className="sunGlasses_subPara_4">OJOS</div>
                                    </div>
                                </WrapItem>
                            </Wrap>
                        </div>
                    </div>
                </li>

                {/* Home Eye Test */}
                <li>
                    HOME EYE-TEST
                    <div className="eyeText_mainMenu">
                        <div className="eyeText_mainMenu_1">
                            <div className='eyeText_SubMenu_1'>
                                <Image h="100%" w="100%" src="https://static1.lenskart.com/media/desktop/img/HomeTryOut.png" alt="doc_img"></Image>
                            </div>
                            <div className='eyeText_SubMenu_2'>
                                <Heading color="#000042" fontWeight="" fontSize="40px" fontFamily="sans-serif" textAlign="center" mt="10%">Get your eyes checked at home</Heading>
                                <Box color="gray" fontSize="larger" textAlign="center" mt="6%">A certified refractionist will wisit you with</Box>
                                <Box color="gray" fontSize="larger" textAlign="center" mt="1.5%">latest eye testing machines & 100 trail frames</Box>
                                <button>Book appointment</button>
                            </div>
                        </div>
                    </div>
                </li>

                {/* Store loctor */}
                <li>
                    STORE LOCTOR
                    <div className="store_mainMenu">
                        <div className="store_mainMenu_1">
                            <div className='store_SubMenu_1'>
                                <Heading color="#000042" fontWeight="" fontSize="40px" fontFamily="sans-serif" textAlign="center" mt="15%">Over 1100+ Lenskart Store</Heading>
                                <Box color="gray" fontSize="larger" textAlign="center" mt="6%">Experience eyewear in a whole new way: Visit your nearest store</Box>
                                <Box color="gray" fontSize="larger" textAlign="center" mt="1.5%">and treat yourself to 5000+ eyewear styles.</Box>
                                <button>Locate a store</button>


                            </div>
                            <div className='store_SubMenu_2'>
                                <Box display="flex" justifyContent="space-around" alignItems="center" ml="20px" mr="20px" mt="145px">
                                    <Box>
                                        <Image h="" w="" src="https://static.lenskart.com/media/desktop/img/Delhi1.png" alt="Delhi"></Image>
                                        <Text mt="-8px" ml="22px">Delhi</Text>
                                    </Box>
                                    <Box>
                                        <Image h="" w="" src="https://static.lenskart.com/media/desktop/img/Banglore1.png" alt="Banglore"></Image>
                                        <Text mt="-8px" ml="15px">Banglore</Text>
                                    </Box>
                                    <Box>
                                        <Image h="" w="" src="https://static.lenskart.com/media/desktop/img/Mumbai1.png" alt="Mumbai"></Image>
                                        <Text mt="-8px" ml="15px">Mumbai</Text>
                                    </Box>
                                    <Box>
                                        <Image h="" w="" src="https://static.lenskart.com/media/desktop/img/Ahmedabad1.png" alt="Ahemdabad"></Image>
                                        <Text mt="-8px" ml="10px">Ahmedabad</Text>
                                    </Box>
                                    <Box>
                                        <Image h="" w="" src="https://static.lenskart.com/media/desktop/img/Chennai1.png" alt="Chennai"></Image>
                                        <Text mt="-8px" ml="15px">Chennai</Text>
                                    </Box>
                                    <Box>
                                        <Image h="" w="" src="https://static.lenskart.com/media/desktop/img/Hyderabad1.png" alt="Hyderabad"></Image>
                                        <Text mt="-8px" ml="15px">Hyderabad</Text>
                                    </Box>
                                    <Box>
                                        <Image h="" w="" src="https://static.lenskart.com/media/desktop/img/Cities1.png" alt="+100_cities"></Image>
                                        <Text mt="-8px" ml="15px">+100 cities</Text>
                                    </Box>
                                </Box>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Hover;
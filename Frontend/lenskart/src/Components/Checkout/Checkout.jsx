import { Image } from '@chakra-ui/image'
import { Box, HStack, Text} from '@chakra-ui/layout'
import React, { useState } from 'react'
import "./Checkout.css";
import {TbCircle1, TbCircle2, TbCircle3} from "react-icons/tb"
import { Input } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';
import { PinInput, PinInputField } from '@chakra-ui/pin-input';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Radio, useToast } from '@chakra-ui/react'
import CheckoutTotal from './CheckoutTotal';
import { useNavigate } from 'react-router-dom';
const Checkout = () => {
    const [opts,setopts] = useState(false);
    const [value,setValue] = useState(undefined);
    const toast = useToast();
    let navigate = useNavigate();

    const handleoptinp = ()=>{
        if(value){
            setopts(true);
        }
        else {
            toast({
                title: `Enter Mobile Number`,
                status: 'warning',
                isClosable: true,
            })
            setopts(false);
        }
    }
    const handleChange = (e)=>{
        setValue(e.target.value);
    }
    const handleEnteropt=()=>{
        toast({
            title: `Entered OTP Successful`,
            status: 'success',
            isClosable: true,
          })
          setopts(false);
          navigate("/address");
    }
    const handleNavi = ()=>{
        if(value){
            toast({
                title: `Guest Login Successfull`,
                status: 'success',
                isClosable: true,
              })
            navigate("/address");
            
        }
        else {
            toast({
                title: `Enter Mobile Number`,
                status: 'warning',
                isClosable: true,
              })
            setopts(false);
        }
    }
    const handleMobile = ()=>{
        navigate("/checkout");
    }
    const handleAddress = ()=>{
        navigate("/address");
    }
    const handlePayClick = ()=>{
        navigate("/payment");
    }
  return (
    <>
        <Box bg='#363636' w='100%' p={2} color='white' display="flex" justifyContent="center" alignItems="center">
            <Box w="12%" cursor={"pointer"}>
                <Image src="" w="100%"/>
            </Box>
        </Box>

        <Box style={{display:"flex",height:"auto",width:"85%",margin:"auto"}}>
            <Box style={{flex:"7"}}>
                <Box id="clip">
                    <span onClick={handleMobile} style={{color:"#363636", backgroundColor:"rgb(242, 245, 248)"}}><TbCircle1 fontSize="25px"/>Enter Mobile Numberd</span>
                    <span onClick={handleAddress}><TbCircle2 fontSize="25px"/> Shipping Address</span>
                    <span onClick={handlePayClick}><TbCircle3 fontSize="25px"/> Payment</span>
                </Box>
                <Box style={{width:"95%",margin:"auto",marginTop:"50px"}}>
                    <Text fontWeight="bold" fontFamily="sans-serif">MOBILE</Text>
                    <Input placeholder='Enter Mobile Number' size='sm' type="number" htmlSize={6} width='auto' onChange={handleChange} value={value}/>
                    <Button marginLeft="5px" onClick={handleoptinp}>Send OTP</Button>
                    {opts? <Box>
                        <Text fontWeight="bold" fontFamily="sans-serif">OTP</Text>
                        <HStack display="flex" justifyContent="center">
                        <PinInput>
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                        </PinInput>
                        <Button marginLeft="5px" padding="10px 30px" onClick={handleEnteropt}>Enter</Button>
                        </HStack>
                    </Box> : ""}
                    <Text fontWeight="bold" fontFamily="sans-serif" mt="10px">OR</Text>
                    <Box style={{marginTop:"10px"}}>
                    <Radio value='2'>Checkout as guest</Radio>
                    
                    <Box style={{marginTop:"20px"}}>
                    <Button color="white" bg="orange.400" padding="20px 40px" onClick={handleNavi}>PROCEED</Button>
                </Box>
            </Box>


                    
                    
            <Box bg='#363636' w='100%' p={2} mt="20px"><Text color="white" letterSpacing="1px" fontFamily="sans-serif" textAlign="center">DOUBTS RELATED TO PRODUCTS</Text></Box>
            <Box style={{marginTop:"30px",marginBottom:"30px"}}>
                <Accordion defaultIndex={[0]} allowMultiple>
                    <AccordionItem>
                        <h2>
                        <AccordionButton bg="#7d7d7d" borderRadius="5px">
                            <Box as="span" flex='1' textAlign='left'>
                            Ques 1. I’m not sure about the size and fit of the frames.
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Ans 1. We offer glasses in 3 sizes – small, medium, and large. Click the ‘Frame Size’ link at the bottom of the page to know your size. ~95% of our customers find a medium size frame to be the best fit.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                        <AccordionButton bg="#7d7d7d" borderRadius="5px">
                            <Box as="span" flex='1' textAlign='left'>
                            Ques 2. What if I buy glasses & they don’t fit me? What if the lenses aren’t right ?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Ans 2. You can buy glasses fitted with your prescription or even the frames standalone. We custom-make glasses with single vision, bifocal, or progressive prescriptions across all powers. Our glasses are ~50% cheaper than market average, since we bypass intermediaries – and best of all, we charge the same price, regardless of your power!
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                        <AccordionButton bg="#7d7d7d" borderRadius="5px">
                            <Box as="span" flex='1' textAlign='left'>
                            Ques 3. Will the glasses have my prescription?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Ans 3. You can buy glasses fitted with your prescription or even the frames standalone. We custom-make glasses with single vision, bifocal, or progressive prescriptions across all powers. Our glasses are ~50% cheaper than market average, since we bypass intermediaries – and best of all, we charge the same price, regardless of your power!
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                        <AccordionButton bg="#7d7d7d" borderRadius="5px">
                            <Box as="span" flex='1' textAlign='left'>
                            Ques 4. I have a complex power, can it be made?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Ans 4. We stock all powers – simple and complex. The unique robotic technology used in our lab ensures that the most complex powers are fitted perfectly, ensuring 100% error-free glasses. Our 10 lakh+ customers can vouch for the precision with which we make the eyeglasses!
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                        <AccordionButton bg="#7d7d7d" borderRadius="5px">
                            <Box as="span" flex='1' textAlign='left'>
                            Ques 5. Where do I submit my eye power details?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Ans 5. You can submit your power details after you complete your purchase. We offer multiple options to provide your prescription to us – upload a picture, enter it online, email us (power@lenskart.com) or call us at +91-9999899998
                        </AccordionPanel>
                    </AccordionItem>
                    </Accordion>
            </Box>
        </Box>
                
             </Box>
            <Box style={{flex:"3"}}>
                    <Box style={{borderWidth: "1px", borderColor: "rgb(160,160,255)",marginTop:"5px",height:"auto"}}>
                    <Box display="flex" p={1} justifyContent="space-between" color="white" bg='#363636' >
                        <Text>SHOPPING CART</Text>
                        <Text>ITEM</Text>
                    </Box>
                    <CheckoutTotal/>
                    </Box>
            </Box>
        </Box>
    </>
  )
}

export default Checkout
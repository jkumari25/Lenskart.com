import { Image } from '@chakra-ui/image'
import { Box, Link, Text} from '@chakra-ui/layout'
import React, { useState } from 'react'
import "./Payment.css";
import {TbCircle1, TbCircle2, TbCircle3} from "react-icons/tb"
import { Input } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure, useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon, CheckCircleIcon, ChevronRightIcon, InfoIcon } from '@chakra-ui/icons';
const Payment = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
    const [cardvalue,setCard] = useState(true);
    const [bhimvalue,setBhim] = useState(false);
    const [netvalue,setNet] = useState(false);
    const [delAll,setDelAll] = useState(false);
    
    const toast = useToast();
    let navigate = useNavigate();

    const handleRegClick = ()=>{
        navigate("/checkout");
    }

    const cardopt = ()=>{
      setCard(true);
      setBhim(false);
      setNet(false);
    }

    const bhimopt = ()=>{
      setBhim(true);
      setCard(false);
      setNet(false);
    }

    const netopt = ()=>{
      setBhim(false);
      setCard(false);
      setNet(true);
    }

  const handlePlace = ()=>{
    onOpen();
    setTimeout(()=>{     
      navigate("/"); 
      toast({
          title: 'Payment Successful.',
          description: "Your Order Placed.",
          status: 'success',
          duration: 4000,
          isClosable: true,
        })
      return  onClose();
    },2000)
    setDelAll(true);
  }
    const handleAddress = ()=>{
        navigate("/address");
    }
  return (
    <div>
        <Box bg='#363636' w='100%' p={2} color='white' display="flex" justifyContent="center" alignItems="center">
            <Box w="12%" cursor={"pointer"}>
            <Image src="" w="100%"/>
            </Box>
        </Box>

        <div style={{display:"flex",height:"auto",width:"85%",margin:"auto"}}>
            <div style={{flex:"7"}}>
                <div id="clip">
                    <span onClick={handleRegClick}><TbCircle1 fontSize="25px"/>Enter Mobile Number</span>
                    <span onClick={handleAddress}><TbCircle2 fontSize="25px"/> Shipping Address</span>
                    <span style={{color:"#363636", backgroundColor:"rgb(242, 245, 248)"}}><TbCircle3 fontSize="25px"/> Payment</span>
                </div>
                <div style={{width:"95%",margin:"auto",marginTop:"30px"}}>
                    <Box bg="#329c92" padding="7px">
                      <Text color="white" fontSize="20px">PAYMENT OPTIONS</Text>
                    </Box>

                    <Box mt="30px" borderWidth="1px" borderColor="#959595" borderRadius="10px" mb="30px">
                      <div id="twoSection">
                        <div className='onesec'>
                          <Box bg={cardvalue? "white" : "#efefef"} w='100%' p={4} fontFamily="sans-serif" fontWeight={"bold"} cursor="pointer" onClick={cardopt}><Text>Credit/Debit Card</Text></Box>
                          <Box bg={bhimvalue? "white" : "#efefef"} w='100%' p={4} fontFamily="sans-serif" fontWeight={"bold"} cursor="pointer" mt="1px" onClick={bhimopt}><Text>BHIM UPI / Phone Pe</Text></Box>
                          <Box bg={netvalue? "white" : "#efefef"} w='100%' p={4} fontFamily="sans-serif" fontWeight={"bold"} cursor="pointer" mt="1px" onClick={netopt}><Text>Net Banking</Text></Box>
                          <Box bg={"#efefef"} w='100%' p={4} fontFamily="sans-serif" fontWeight={"bold"} cursor="pointer" mt="1px"><Text>UPI QR Code</Text></Box>
                          <Box bg={"#efefef"} w='100%' p={4} fontFamily="sans-serif" fontWeight={"bold"} cursor="pointer" mt="1px"><Text>Paytm</Text></Box>
                          <Box bg={"#efefef"} w='100%' p={4} fontFamily="sans-serif" fontWeight={"bold"} cursor="pointer" mt="1px"><Text>Google Pay</Text></Box>
                          <Box bg={"#efefef"} w='100%' p={4} fontFamily="sans-serif" fontWeight={"bold"} cursor="pointer" mt="1px"><Text>Cash On Delivery</Text></Box>
                          <Box bg={"#efefef"} w='100%' p={4} fontFamily="sans-serif" fontWeight={"bold"} cursor="pointer" mt="1px"><Text>Store Credit</Text></Box>
                        </div>
                        <div className='twosec'>
                          <Box id="card" display={!cardvalue ? "none" : true}>
                          <Box display={"flex"} justifyContent="space-between" p={2}>
                            <Box><Text fontWeight={"bold"}>100% Secure</Text></Box>
                            <Box w="40%" display={"flex"} justifyContent="center" alignItems={"center"}><img src="https://static5.lenskart.com/images/cust_mailer/Mar-03/CheckoutStrip.png" alt="" width="100%"/></Box>
                          </Box>
                          <Box p={2}>
                            <Input placeholder='Enter Card Number'/>
                          </Box>
                          <Box p={2}>
                            <Input htmlSize={26} width='auto' placeholder='Enter Expiry Date'/>
                            <Input htmlSize={26} width='auto' placeholder='Enter CVV'/>
                          </Box>
                          <Box p={2}>
                            <Input placeholder='Enter Cardholder Name'/>
                          </Box>
                          <Box p={2}><Text pl="5px"><CheckCircleIcon color="#329c92"/> Secure this card as per RBI guidelinesLearn <Link color="blue">More</Link></Text></Box>
                          <Box p={2}>
                            <Text pl="5px"><InfoIcon color="#329c92"/> (Submit Power in the Next Step)</Text>
                          </Box>
                          <Box p={4}>
                            <Button bg="#329c92" color="white" fontWeight={"bold"} onClick={handlePlace}>PLACE ORDER</Button>
                          </Box> 
                        
                          </Box>
                          <Box id="bhim" display={!bhimvalue?"none": true}>
                            <Box p={2}>
                              <Input placeholder='Enter UPI ID'/>
                            </Box>
                            <Box p={2}>
                              <Text pl="5px"><InfoIcon color="#329c92"/> (Submit Power in the Next Step)</Text>
                            </Box>
                            <Box p={4}>
                              <Button bg="#329c92" color="white" fontWeight={"bold"} onClick={handlePlace}>PLACE ORDER</Button>
                            </Box> 
                          </Box>

                          <Box id="net" display={!netvalue ? "none": true}>
                            <Box p={2}>
                              <Text pl="5px" fontWeight={"semibold"}>Pay using Netbanking</Text>
                            </Box>
                            <Box id="inner_net" p={2} display={"flex"} justifyContent="space-between" alignItems="center" borderWidth={"1px"} borderRadius={"10px"}>
                              <Box display={"flex"} justifyContent="space-between" alignItems="center" w="30%"  p={2}>
                                <img src="https://static5.lenskart.com/images/cust_mailer/feb-26th/HDFC.png" alt="" width="30%"/>
                                <Text fontWeight={"semibold"}>HDFC Bank</Text>
                              </Box>
                              <ArrowRightIcon/>
                            </Box>
                            <Box id="inner_net" p={2} display={"flex"} justifyContent="space-between" alignItems="center" borderWidth={"1px"} borderRadius={"10px"}>
                              <Box display={"flex"} justifyContent="space-between" alignItems="center" w="30%"  p={2}>
                                <img src="https://static5.lenskart.com/images/cust_mailer/feb-26th/icici.png" alt="" width="30%"/>
                                <Text fontWeight={"semibold"}>ICICI Bank</Text>
                              </Box>
                              <ArrowRightIcon/>
                            </Box>
                            <Box id="inner_net" p={2} display={"flex"} justifyContent="space-between" alignItems="center" borderWidth={"1px"} borderRadius={"10px"}>
                              <Box display={"flex"} justifyContent="space-between" alignItems="center" w="40%"  p={2}>
                                <img src="https://static5.lenskart.com/images/cust_mailer/feb-26th/sbi.png" alt="" width="22%"/>
                                <Text fontWeight={"semibold"}>State Bank of India</Text>
                              </Box>
                              <ArrowRightIcon/>
                            </Box>
                            <Box id="inner_net" p={2} display={"flex"} justifyContent="space-between" alignItems="center" borderWidth={"1px"} borderRadius={"10px"}>
                              <Box display={"flex"} justifyContent="space-between" alignItems="center" w="44%"  p={2}>
                                <img src="https://static5.lenskart.com/images/cust_mailer/feb-26th/Kotak.png" alt="" width="20%"/>
                                <Text fontWeight={"semibold"}>Kotak Mahindra Bank</Text>
                              </Box>
                              <ArrowRightIcon/>
                            </Box>
                            <Box id="inner_net" p={2} display={"flex"} justifyContent="space-between" alignItems="center" borderWidth={"1px"} borderRadius={"10px"}>
                              <Box display={"flex"} justifyContent="space-between" alignItems="center" w="27%"  p={2}>
                                <img src="https://static5.lenskart.com/images/cust_mailer/feb-26th/Axis.png" alt="" width="35%"/>
                                <Text fontWeight={"semibold"}>Axis Bank</Text>
                              </Box>
                              <ArrowRightIcon/>
                            </Box>
                          </Box>
                        </div>
                        
                      </div>
                      <Box w='100%' p={4}><Text align={"right"}>By placing the order, I have read and agreed to lenskart.com <a href='#' style={{color:"blue",textDecoration:"underline"}}>T&C</a></Text></Box>
                      <Box p={2}>
                        <hr/>
                      </Box>
                      <Box display="flex" justifyContent={"space-between"} alignItems="center" p={4}>
                        <Text fontSize={"20px"} fontWeight="bold">Lenskart Assurance</Text>
                        <Link>Cancellation Policy <ChevronRightIcon/></Link>
                      </Box>
                      <Box>
                        <Box>
                          <img src="https://static1.lenskart.com/media/desktop/img/all-assurance-offering.png" alt=""/>
                        </Box>
                      </Box>
                    </Box>
                      <Box>
                        <Modal onClose={onClose} isOpen={isOpen} isCentered>
                          <ModalOverlay />
                          <ModalContent>
                            <ModalCloseButton onClick={onClose} />
                            <ModalBody display={"grid"} justifyContent="center" alignItems="center">
                              <Box w="30%" m="auto" pt="30px">
                              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbUjKfc_Ysh3DztKcIf1mgLDgcpWo3IAeohQ&usqp=CAU" w="50%"/>
                              </Box>
                              <Text p={2} fontWeight="semibold" mb="30px">Order Placed Successfully</Text>
                            </ModalBody>
                          </ModalContent>
                        </Modal>
                      </Box>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Payment;
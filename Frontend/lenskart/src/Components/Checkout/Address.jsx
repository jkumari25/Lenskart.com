import { Box, Button, Image, Input, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import {TbCircle1, TbCircle2, TbCircle3} from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import "./Address.css";

function Form() {
  const [formData, setFormData] = useState({firstName: "", lastName: "", city: "", address: "", pinCode: "", country: ""});
  const [formErrors, setFormErrors] = useState({firstName: "", lastName: "", city: "", address: "", pinCode: "", country: ""});
  const toast = useToast();
  const navigate = useNavigate();

  const handleMobile = ()=>{
    navigate("/checkout");
  }
  const handleAddress = ()=>{
      navigate("/address");
  }
  const handlePayClick = ()=>{
      navigate("/payment");
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate(formData);
    if (Object.keys(errors).length > 0) { 
      setFormErrors(errors);
    } else {
        console.log(formData,formErrors)
      setFormData({firstName: "", lastName: "", city: "", address: "", pinCode: "", country: ""});
      setFormErrors({firstName: "", lastName: "", city: "", address: "", pinCode: "", country: "" });
    }

  };

  const validate = (formData) => {
    const errors = {};
    if (!formData.firstName || !formData.lastName || !formData.city || !formData.address || !formData.pinCode || !formData.country) {
      errors.firstName = toast({
        title: `Enter All Details`,
        status: 'warning',
        isClosable: true,
    });
    }
    return errors;
  };
  
  return (
    <>
    <Box bg='#363636' w='100%' p={2} color='white' display="flex" justifyContent="center" alignItems="center">
      <Box w="12%" cursor={"pointer"}>
          <Image src="" w="100%"/>
      </Box>
    </Box>
    <Box style={{flex:"7"}}>
      <Box id="clip">
          <span onClick={handleMobile}><TbCircle1 fontSize="25px"/>Enter Mobile Numberd</span>
          <span onClick={handleAddress} style={{color:"#363636", backgroundColor:"rgb(242, 245, 248)"}}><TbCircle2 fontSize="25px"/> Shipping Address</span>
          <span onClick={handlePayClick}><TbCircle3 fontSize="25px"/> Payment</span>
      </Box>
    </Box>
    <form id="box" onSubmit={handleSubmit} style={{width:"50%", margin:"auto", marginTop:"50px",padding:"30px", textAlign:"start", fontWeight:"bold", color:"#061c45"}}>
        <Box p="1" mb={"10px"}>
            <label htmlFor="firstName" style={{paddingBottom:"10px"}}>First Name:</label>
            <Input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange}/>
        </Box>
        <Box p="1" mb={"10px"}>
            <label htmlFor="lastName">Last Name:</label>
            <Input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange}/>
        </Box>
        <Box p="1" mb={"10px"}>
            <label htmlFor="city">City:</label>
            <Input type="text" id="city" name="city" value={formData.city} onChange={handleInputChange}/>
        </Box>
        <Box p="1" mb={"10px"}>
            <label htmlFor="address">Address:</label>
            <Input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange}/>
        </Box>
        <Box p="1" mb={"10px"}>
            <label htmlFor="pinCode">Pin Code:</label>
            <Input type="text" id="pinCode" name="pinCode" value={formData.pinCode} onChange={handleInputChange}/>
        </Box>
        <Box p="1" mb={"10px"}>
            <label htmlFor="country">Country:</label>
            <Input type="text" id="country" name="country" value={formData.country} onChange={handleInputChange}/>
        </Box>
        <Button type="submit" display={"flex"} alignItems="center" ml={"40%"} mt="1.5" pl="10" pr="10">Submit</Button>
    </form>
    </>
    );
}

export default Form;

import { Box, Button, Input, useToast } from "@chakra-ui/react";
import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({firstName: "", lastName: "", city: "", address: "", pinCode: "", country: ""});
  const [formErrors, setFormErrors] = useState({firstName: "", lastName: "", city: "", address: "", pinCode: "", country: ""});
  const toast = useToast();

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
    if (!formData.firstName) {
      errors.firstName = toast({
        title: `Enter First Name`,
        status: 'warning',
        isClosable: true,
    });
    }
    if (!formData.lastName) {
      errors.lastName = toast({
        title: `Enter Last Name`,
        status: 'warning',
        isClosable: true,
    });
    }
    if (!formData.city) {
      errors.city = toast({
        title: `Enter City Name`,
        status: 'warning',
        isClosable: true,
    });
    }
    if (!formData.address) {
      errors.address = toast({
        title: `Enter Address`,
        status: 'warning',
        isClosable: true,
    });
    }
    if (!formData.pinCode) {
      errors.pinCode = toast({
        title: `Enter Pin Code`,
        status: 'warning',
        isClosable: true,
    });
    }
    if (!formData.country) {
      errors.country = toast({
        title: `Enter Country`,
        status: 'warning',
        isClosable: true,
    });
    }
    return errors;
  };
  
  return (
    <form onSubmit={handleSubmit} style={{width:"50%", margin:"auto", marginTop:"30px",padding:"20px", border:"1px solid red", textAlign:"start", fontWeight:"bold"}}>
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
    );
}

export default Form;

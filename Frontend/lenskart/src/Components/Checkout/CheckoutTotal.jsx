import { CloseIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/layout";
import { Button, Image } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const CheckoutTotal = () => {
  const [data, setData] = useState([]);

  const handleData = async () => {
    let res = await axios.get(
      "http://localhost:8080/all_Eyeglasses?_limit=4"
    );
    let val = await res.data;
    setData(val);
  };
  useEffect(() => {
    handleData();
  }, []);

  const deleteItem = async (id) => {
    let res = await axios
      .delete(`http://localhost:8080/all_Eyeglasses/cart/${id}`)
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });
    console.log(res);
  };
  const deleteItems = (id) => {
    const newData = data.filter((el) => {
      return el.id !== id;
    });
    deleteItem(id);
    setData(newData);
  };

  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total += Number(data[i].product_price);
  }
  let tax  = 420;
  return (
    <>
      {data.map((datas) => (
        <Box key={datas.id} style={{ width: "95%", margin: "auto" }}>
          <Box style={{display: "flex", justifyContent: "space-around", alignItems: "center",}}>
            <Box style={{ width: "30%" }}>
              <Image src={datas.product_image} alt="" width="100%" />
            </Box>
            <Box>
              <Button onClick={() => deleteItems(datas.id)}>
                <CloseIcon />
              </Button>
            </Box>
          </Box>
          <Box style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}>
            <Text fontWeight="bold" w="40%">{datas.product_name}</Text>
            <Text>₹{datas.product_price}</Text>
          </Box>
          <hr />
        </Box>
      ))}
      <hr />
      <Box style={{ width: "95%", margin: "auto" }}>
        <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center",}}>
          <Text fontSize="13px" color="#363636" fontWeight="bold">SUBTOTAL</Text>
          <Text fontSize="15px" color="#363636" fontWeight="bold">₹{total}</Text>
        </Box>
        <Box style={{display: "flex", justifyContent: "space-between", alignItems: "center",}}>
          <Text fontSize="13px" color="#363636" fontWeight="bold">NET AMOUNT</Text>
          <Text fontSize="15px" color="#363636" fontWeight="bold">₹{total}</Text>
        </Box>
        <Box style={{ display: "flex",justifyContent: "space-between",alignItems: "center",}}>
          <Text fontSize="13px" color="#363636" fontWeight="bold">TAX COLLECTED</Text>
          <Text fontSize="15px" color="#363636" fontWeight="bold">+₹{total? tax : 0}</Text>
        </Box>
        <hr />
        <Box style={{display: "flex",justifyContent: "space-between", alignItems: "center",}}>
          <Text fontSize="15px" color="#363636" fontWeight="bold">ORDER TOTAL</Text>
          <Text fontSize="15px" color="#009997" fontWeight="bold">₹{total? total+tax : 0}</Text>
        </Box>
      </Box>
    </>
  );
};

export default React.memo(CheckoutTotal);
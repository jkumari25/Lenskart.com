import { CloseIcon } from "@chakra-ui/icons";
import { Text } from "@chakra-ui/layout";
import axios from "axios";

import React, { useEffect, useState } from "react";

const PaymentTotal = ({delAll}) => {
  const [data, setData] = useState([]);

  const handleData = async () => {
    let res = await axios.get(
      "https://lazy-red-armadillo-garb.cyclic.app/cart"
    );
    let val = await res.data;
    setData(val);
  };
  useEffect(() => {
    handleData();
  }, []);

  const deleteItem = async (id) => {
    let res = await axios
      .delete(`https://lazy-red-armadillo-garb.cyclic.app/cart/${id}`)
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

  
  const emptyCart = (id)=>{
        
    axios.delete(`https://lazy-red-armadillo-garb.cyclic.app/cart/${id}`).then((res)=>setData([])).catch((err)=>console.log(err));
  }
  if(delAll){
    data.forEach((el)=>emptyCart(el.id))
  }
  const postUpdate = async (id, newValue) => {
    let tmp;
    newValue.map((e) => (id === e.id ? e.quantity : e));

    let upd = await axios
      .patch(`https://lazy-red-armadillo-garb.cyclic.app/cart/${id}`, {
        quantity: tmp,
      })
      .then((res) => console.log(""))
      .catch((err) => {
        console.log(err);
      });
  };
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    //   console.log(data);
    total += Number(data[i].product_price) * Number(data[i].quantity);
  }
  let tax  = 420;
  return (
    <div>
      {data.map((datas) => (
        <div key={datas.id} style={{ width: "95%", margin: "auto" }}>
          <div style={{display: "flex", justifyContent: "space-between",alignItems: "center",}}>
            <div style={{ width: "30%" }}>
              {/* <img src={datas.product_image} alt="" width="100%" /> */}
            </div>
            <div>
              <button onClick={() => deleteItems(datas.id)}>
                <CloseIcon />
              </button>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center",}}>
            <Text fontWeight="bold" w="40%">{datas.product_name}</Text>
            <Text>{datas.category}</Text>
            <Text>₹{datas.product_price}</Text>
          </div>
          <hr />
        </div>
      ))}
      <hr />
      <div style={{ width: "95%", margin: "auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <Text fontSize="13px" color="#363636" fontWeight="bold">SUBTOTAL</Text>
          <Text fontSize="15px" color="#363636" fontWeight="bold">₹{total}</Text>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center",}}>
          <Text fontSize="13px" color="#363636" fontWeight="bold">NET AMOUNT</Text>
          <Text fontSize="15px" color="#363636" fontWeight="bold">₹{total}</Text>
        </div>
        <div style={{display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text fontSize="13px" color="#363636" fontWeight="bold">
            TAX COLLECTED
          </Text>
          <Text fontSize="15px" color="#363636" fontWeight="bold">+
            ₹{total? tax : 0}
          </Text>
        </div>
        <hr />
        <div style={{display: "flex",justifyContent: "space-between",alignItems: "center"}}>
          <Text fontSize="15px" color="#363636" fontWeight="bold">ORDER TOTAL</Text>
          <Text fontSize="15px" color="#009997" fontWeight="bold">₹{total? total+tax : 0}</Text>
        </div>
      </div>
    </div>
  );
};

export default React.memo(PaymentTotal);
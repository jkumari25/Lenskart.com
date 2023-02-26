import React from "react";
import { Alert, AlertIcon, AlertTitle, Button, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import TopNav from "../../Componets/Navbar/TopNav";
import Footer from "../../Componets/Footer/Footer";
const CartNull = () => {
  return (
    <>
    <TopNav />
    <Box m="auto">
      <Alert
        status="warning"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="710px"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Your shopping cart is empty !
        </AlertTitle>
        <Button borderRadius="20px" bgColor="#64dbad">
          <Link to="/">Continue Shopping</Link>
        </Button>
      </Alert>
    </Box>
    <Footer />
    </>
  );
};

export default CartNull;
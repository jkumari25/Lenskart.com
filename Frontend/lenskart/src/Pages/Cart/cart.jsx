import { Box, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'

const Cart = () => {
  return (
    <Box m={"10px 30px 10px 30px"}>
        <Grid h='auto' templateRows='repeat(2, 1fr)' templateColumns='repeat(6, 1fr)' gap={4}>
            <GridItem rowSpan={2} colSpan={4} bg='tomato'>
                <Text textAlign={"start"} p="20px" fontSize='2xl'>Cart(Item)</Text>
                <Grid templateColumns='repeat(2, 1fr)' gap={4} pb={"60px"} pl={"10px"} pr={"10px"}>
                    <GridItem rowSpan={2} colSpan={2} bg='papayawhip' h="200px" borderRadius={"20px"}></GridItem>
                    <GridItem rowSpan={2} colSpan={2} bg='green' h="200px"></GridItem>
                    <GridItem rowSpan={2} colSpan={2} bg='yellow' h="200px"></GridItem>
                    <GridItem rowSpan={2} colSpan={2} bg='papayawhip' h="200px"></GridItem>
                    <GridItem rowSpan={2} colSpan={2} bg='green' h="200px"></GridItem>
                    <GridItem rowSpan={2} colSpan={2} bg='yellow' h="200px"></GridItem>
                </Grid>
            </GridItem>
            <GridItem rowSpan={2} colSpan={2} bg='papayawhip'>
                <Text textAlign={"start"} fontSize={"2xl"} p="20px">Bill Details</Text>
            </GridItem>
        </Grid>
    </Box>
  )
}

export default Cart;
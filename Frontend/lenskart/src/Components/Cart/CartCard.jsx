import {
	Box,
	Button,
	ButtonGroup,
	Card,
	Divider,
	Flex,
	Image,
	Stack,
	Text,
} from "@chakra-ui/react";
import React from "react";

const CartCard = ({product_image, product_name,product_price,quantity,id,removeCartItem}) => {
	return (
		<Box mt="20px">
			<Card
				direction={{ base: "column", sm: "row" }}
				overflow="hidden"
				variant="outline"
			>
				<Flex justifyContent={"center"} alignItems="center">
					<Image
						objectFit="cover"
						maxW={{ base: "100%", sm: "200px" }}
						src={product_image}
						alt="Caffe Latte"
					/>
				</Flex>
				<Stack padding={"30px"}>
					<Flex gap={6}>
						<Text w="350px">{product_name}</Text>
						<Text>{product_price}</Text>
					</Flex>{" "}
					<Flex gap={6}>
						<Text w="350px">Hydrophobic Anti-Glare</Text>
						<Text>501</Text>
					</Flex>
					<Flex gap={6}>
						<Text w="350px">
							Upload Prescription After Payment
						</Text>
					</Flex>
					<Divider borderBottom={"1px dashed"} />
					<Flex gap={6}>
						<Text w="350px">Final Price</Text>
						<Text>{+product_price + 501}</Text>
					</Flex>
					<Divider borderBottom={"1px dashed"} />
					<ButtonGroup spacing={2}>
						<Button onClick={removeCartItem}>
							Remove
						</Button>
						{/* <Button>{quantity}</Button> */}
						{/* <Button
							onClick={() =>
								updateQuantity(id, { quantity: quantity + 1 })
							}
						>
							Repeat
						</Button> */}
					</ButtonGroup>
				</Stack>
			</Card>
		</Box>
	);
};

export default CartCard;
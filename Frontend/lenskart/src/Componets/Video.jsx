import { SimpleGrid, Box, Heading, Center, Text } from "@chakra-ui/react";
import React from "react";

const Videos = () => {
  return (
    <Box
      padding={"30px"}
      bgColor="#fff092"
      marginTop={"25px"}
      display={{ base: "none", sm: "none", md: "grid" }}
      // flexDirection="row"
    >
      <Center>
        <Text fontSize="25px">MEET OUR HAPPY CUSTOMERS</Text>
      </Center>

      <SimpleGrid columns={[0, 0, 0, 1,3]} marginTop="30px">
        <Box>
          <iframe
            width="415"
            height="276"
            src="https://www.youtube.com/embed/HYPqf_eVvvM"
            title="Customer Reviews"
            // frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Box>
        <Box>
          <iframe
            width="415"
            height="276"
            src="https://www.youtube.com/embed/SQm3RxXRunw"
            title="Customer Reviews"
            // frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Box>
        <Box>
          <iframe
            width="415"
            height="276"
            src="https://www.youtube.com/embed/IZpUQ-S_LcM"
            title="Customer Reviews"
            // frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Videos;
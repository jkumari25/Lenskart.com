import React from 'react';
import { Box } from '@chakra-ui/react';

const Required = (props) => {
  return (
    <Box fontSize={"12px" } m="3px 0px 3px 0px" color={"#DCF3F9"} fontWeight="500" letterSpacing={"-0.4px"} >{props.info}</Box>
  )
}

export default Required
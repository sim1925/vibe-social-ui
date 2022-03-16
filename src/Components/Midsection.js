import React from 'react'
import Vibe from './vibe'
import {
    IconButton,
    Box,
    CloseButton,
    Flex,
    Icon,
    useColorModeValue,
    Link,
    Drawer,
    DrawerContent,
    Text,
    useDisclosure,
    BoxProps,
    FlexProps,
} from "@chakra-ui/react";

function Midsection() {
  return (
    <Box
            bg={useColorModeValue("#11263E")}
            borderRight="1px"
            h="97vh"
          
            borderRadius={"10px"}
            
        ><Vibe /></Box>
  )
}

export default Midsection
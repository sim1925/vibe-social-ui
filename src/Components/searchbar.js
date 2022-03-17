import React from 'react'
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
    Input,
    InputLeftElement,
    InputGroup,
    Stack,
    VStack,
  

} from "@chakra-ui/react";

function Searchbar() {
  return (
    
  
   
    <InputGroup color={"white"}  >
      <InputLeftElement
        pointerEvents='none'
      />
      <Input borderRadius={20} w={"400px"}
        type='tel' placeholder='Search Vibe' />
  </InputGroup>
  
   
  )
}

export default Searchbar;
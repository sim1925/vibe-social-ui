import React from 'react'
import { HStack, useColorModeValue, VStack } from '@chakra-ui/react'
import Searchbar from '../Components/searchbar'
import SimpleSidebar from "../Components/sidebar";
import Rightpane from '../Components/rightpane'

function Explore() {
  return (
    <HStack 
    padding={2}
    
    alignItems={"start"}
    bg={useColorModeValue("#0A131D")}>
        <SimpleSidebar />
        <Searchbar /> 
       <Rightpane />
       
</HStack>
   
  )
}

export default Explore
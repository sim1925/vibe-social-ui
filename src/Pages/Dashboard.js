import { HStack, useColorModeValue, VStack } from '@chakra-ui/react'
import React from 'react'
import Midsection from '../Components/Midsection'
import Bottom from '../Components/Bottom'
import SimpleSidebar from '../Components/sidebar'
import Searchbar from '../Components/searchbar'
import Rightpane from '../Components/rightpane'


function Dashboard() {
  return (
    <HStack 
    padding={2}
    
    alignItems={"start"}
    bg={useColorModeValue("#0A131D")}>
        <SimpleSidebar />
        <VStack>
        <Midsection  />
        <Bottom />
      </VStack>
        <VStack spacing={5}><Searchbar /> 
       <Rightpane />
        </VStack>


        


        
        
    </HStack>
  )
}

export default Dashboard
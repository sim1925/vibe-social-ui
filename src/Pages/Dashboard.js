import { HStack, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import Midsection from '../Components/Midsection'
import Bottom from '../Components/Bottom'
import SimpleSidebar from '../Components/sidebar'


function Dashboard() {
  return (
    <HStack 
    padding={2}
    
    alignItems={"start"}
    bg={useColorModeValue("#0A131D")}>
        <SimpleSidebar />
        <div>
        <Midsection  />
        <Bottom />
      
        </div>

        
        
    </HStack>
  )
}

export default Dashboard
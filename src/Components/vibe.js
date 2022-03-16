import React, { useState } from 'react'
import {
  Box,
  Text,
 Textarea
 
} from "@chakra-ui/react";

function Vibe() {
  const [vibetext, setVibe] = useState('')

  let handleInputChange = (e) => {
    let inputValue = e.target.value
    setVibe(inputValue)
  }
  
  return (
    <Box
    >
    <Textarea
      value={vibetext}
      onChange={handleInputChange}
      width={700}
      mx={6}
      mt={4}
      placeholder="What's Happening?"
      size='sm'
      color={"white"}
    />
  </Box
  
  >
   
    
  )
}

export default Vibe
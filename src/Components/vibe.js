import React, { useState } from "react";
import { Box, Input, Text, Textarea } from "@chakra-ui/react";

function Vibe() {
  const [vibetext, setVibe] = useState("");

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setVibe(inputValue);
  };

  return (
    <Box>
      <Input
        width={700}
        mx={6}
        mt={4}
        color={"white"}
        placeholder="Topic"
        size="md"
      />
      <Textarea
        value={vibetext}
        onChange={handleInputChange}
        width={700}
        mx={6}
        mt={4}
        placeholder="What's Happening?"
        size="md"
        color={"white"}
        resize={"none"}
      />
    </Box>
  );
}

export default Vibe;

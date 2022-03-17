import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Post from "./Post";

export default function ExploreSection() {
  return (
    <Box
      bg={useColorModeValue("#11263E")}
      borderRight="1px"
      h="97vh"
      maxW={"50vw"}
      marginTop={2}
      borderRadius={"10px"}
      overflow="auto"
      sx={{
        "&::-webkit-scrollbar": {
          width: "16px",
          borderRadius: "10px",
          backgroundColor: `rgba(0, 0, 0, 0.20)`,
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: `rgba(0, 0, 0, 0.2)`,
        },
      }}
    >
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
}

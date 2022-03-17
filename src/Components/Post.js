import React from "react";
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
  Spacer,
  HStack,
} from "@chakra-ui/react";
import {
  FiHeart
  
 
} from "react-icons/fi";

import {
  FaRegComment
  
 
} from "react-icons/fa";


import { icons } from "react-icons";

export default function Post() {
  return (
    <>
      <Box minH="30vh" padding={"20px"} borderRadius={"10px"}>
        <Box
          bg={useColorModeValue("#512da8")}
          h="40px"
          //   borderRadius={"10px"}
          //   border={"solid"}
          padding="10px"
          borderTopRadius={"10px"}
          color={"white"}
        >
          <Flex>
            <Box p="0">Username Address</Box>
            <Spacer />
            <Box p="0">Date Time</Box>
          </Flex>
        </Box>
        <Box
          bg={useColorModeValue("black")}
          padding="18px"
          color={"white"}
          //   borderRadius={"10px"}
          //   border={"solid"}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          volutpat eget metus nec accumsan. Integer augue ipsum, semper sed
          accumsan a, pretium vitae ipsum. Nam ultricies dictum tortor, eget
          aliquet ex condimentum eu. Ut in consectetur nulla, ut hendrerit ante.
          Sed laoreet finibus odio, ac malesuada turpis eleifend a. Pellentesque
          efficitur auctor diam non tempor. Vivamus ut ornare leo, id auctor
          velit.
        </Box>
        <Box
          bg={useColorModeValue("black")}
          h="40px"
          borderBottomRadius={"10px"}
          paddingLeft={"630px"}
          paddingTop={2}
          color={"white"}
          //   borderRadius={"10px"}
          //   border={"solid"}
        >
          <HStack spacing={30}><button><FiHeart></FiHeart></button>
          <button><FaRegComment></FaRegComment></button>
          </HStack>

        </Box>
      </Box>
    </>
  );
}

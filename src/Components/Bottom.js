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
} from "@chakra-ui/react";
import Post from "./Post";

function Bottom() {
    return (
        <Box
            bg={useColorModeValue("#11263E")}
            borderRight="1px"
            h="66vh"
            maxW={"50vw"}
            marginTop={2}
            borderRadius={"10px"}
            overflow="scroll"
        >
            <Post />
            <Post />
            <Post />
            <Post />
        </Box>
    );
}

export default Bottom;

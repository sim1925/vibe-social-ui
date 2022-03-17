import React from "react";
import Vibe from "./vibe";
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
    Button,
} from "@chakra-ui/react";

function Midsection() {
    return (
        <Box
            bg={useColorModeValue("#11263E")}
            borderRight="1px"
            h="30vh"
            maxW="50vw"
            borderRadius={"10px"}
        >
            <Vibe />
            <Button mx={6} mt={4} colorScheme="teal" size="md">
                Post
            </Button>
        </Box>
    );
}

export default Midsection;

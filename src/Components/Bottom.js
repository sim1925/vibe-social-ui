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

function Bottom() {
    return (
        <Box
            bg={useColorModeValue("#11263E")}
            borderRight="1px"
            h="76vh"
            marginTop={2}
            borderRadius={"10px"}
        ></Box>
    );
}

export default Bottom;

import React, { ReactNode } from "react";
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
import {
    FiHome,
    FiTrendingUp,
    FiCompass,
    FiStar,
    FiSettings,
    FiMenu,
} from "react-icons/fi";

import { Content } from "../App";

const LinkItems = [
    { name: "Home", icon: FiHome },
    { name: "Trending", icon: FiTrendingUp },
    { name: "Explore", icon: FiCompass },
    { name: "Favourites", icon: FiStar },
    { name: "Settings", icon: FiSettings },
];

const SimpleSidebar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box minH="100vh" bg={useColorModeValue("#0A131D")}>
            <SidebarContent
                onClose={() => onClose}
                display={{ base: "none", md: "block" }}
            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full"
            >
                <DrawerContent>
                    <SidebarContent onClose={onClose} Content={Content} />
                </DrawerContent>
            </Drawer>
        </Box>
    );
};

const SidebarContent = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box
            bg={useColorModeValue("#11263E")}
            borderRight="1px"
            left={"15px"}
            top={"15px"}
            borderRadius={"10px"}
            w={{ base: "full", md: 60 }}
            pos="fixed"
            h="96%"
        >
            <Flex
                h="20"
                alignItems="center"
                mx="8"
                justifyContent="space-between"
            >
                <Text
                    fontSize="2xl"
                    fontFamily="monospace"
                    fontWeight="bold"
                    color={"white"}
                >
                    SOLVIBE
                </Text>
                <CloseButton
                    display={{ base: "flex", md: "none" }}
                    onClick={onClose}
                />
            </Flex>
            {LinkItems.map((link) => (
                <NavItem key={link.name} icon={link.icon} name={link.name} />
            ))}
            <Box mt={10} ml={5}>
                <Content />
            </Box>
        </Box>
    );
};

const NavItem = ({ icon, name }) => {
    return (
        <Link
            href="#"
            style={{ textDecoration: "none" }}
            _focus={{ boxShadow: "none" }}
            color={"white"}
        >
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: "cyan.400",
                    color: "white",
                }}
            >
                <Icon
                    mr="4"
                    fontSize="16"
                    _groupHover={{
                        color: "white",
                    }}
                    as={icon}
                />
                <Text>{name}</Text>
            </Flex>
        </Link>
    );
};

export default SimpleSidebar;

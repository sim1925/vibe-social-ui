import { Box, HStack, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import React from "react";
import SimpleSidebar from "../Components/sidebar";

function AccDetails() {
    return (
        <HStack
            padding={2}
            alignItems={"start"}
            bg={useColorModeValue("#0A131D")}
            spacing={5}
        >
            <SimpleSidebar />
            <Box
                bg={useColorModeValue("#11263E")}
                borderRight="1px"
                h="97vh"
                w={"full"}
                borderRadius={"10px"}
            >
                <Box mt={12} ml={12}>
                    <Text
                        fontSize={40}
                        fontWeight={"bold"}
                        color={"white"}
                        mb={10}
                    >
                        Account Details
                    </Text>

                    <VStack alignItems={"start"}>
                        <HStack
                            justifyContent={"space-between"}
                            width="full"
                            pr={16}
                        >
                            <VStack alignItems={"start"}>
                                <Text fontSize={18} color={"white"} mt={20}>
                                    Sol Address
                                </Text>
                                <Text
                                    fontSize={18}
                                    color={"gray.500"}
                                    mt={20}
                                    spacing={12}
                                >
                                    BtrH3c2zVjYdFcVXkv4CCPvTMEFesWjs6yy4xxdtPF2u
                                </Text>
                            </VStack>
                            <VStack alignItems={"end"}>
                                <Text fontSize={18} color={"white"} mt={20}>
                                    Username
                                </Text>
                                <Text
                                    fontSize={18}
                                    color={"gray.500"}
                                    mt={20}
                                    spacing={12}
                                >
                                    @catrovacer.sol
                                </Text>
                            </VStack>
                        </HStack>
                        <HStack
                            justifyContent={"space-between"}
                            width="full"
                            pr={16}
                        >
                            <VStack alignItems={"start"}>
                                <Text fontSize={18} color={"white"} mt={20}>
                                    SNS Domains Owned
                                </Text>
                                <Text
                                    fontSize={18}
                                    color={"gray.500"}
                                    mt={20}
                                    spacing={12}
                                >
                                    0
                                </Text>
                            </VStack>
                            <VStack alignItems={"end"}>
                                <Text fontSize={18} color={"white"} mt={20}>
                                    Favoured SNS Domain
                                </Text>
                                <Text
                                    fontSize={18}
                                    color={"gray.500"}
                                    mt={20}
                                    spacing={12}
                                >
                                    none
                                </Text>
                            </VStack>
                        </HStack>
                    </VStack>
                </Box>
            </Box>
        </HStack>
    );
}

export default AccDetails;

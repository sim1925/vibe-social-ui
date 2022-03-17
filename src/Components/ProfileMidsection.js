import React from "react";
import { Box, HStack, Text, useColorModeValue, VStack } from "@chakra-ui/react";

function ProfileMidsection() {
    return (
        <Box
            bg={useColorModeValue("#11263E")}
            borderRight="1px"
            borderRadius={"10px"}
            width={700}
        >
            <Box mt={16} ml={20} mb={16}>
                <VStack alignItems={"start"} spacing={10}>
                    <Text fontSize={20} color={"white"} fontWeight={"bold"}>
                        @username -{" "}
                        <Text as={"span"} color={"#a080ed"}>
                            snsdomain.sol
                        </Text>
                    </Text>
                    <Text fontSize={16} color={"gray.500"}>
                        BtrH3c2zVjYdFcVXkv4CCPvTMEFesWjs6yy4xxdtPF2u
                    </Text>
                </VStack>
            </Box>
        </Box>
    );
}

export default ProfileMidsection;

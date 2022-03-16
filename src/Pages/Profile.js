import { HStack, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Midsection from "../Components/Midsection";
import SimpleSidebar from "../Components/sidebar";

function Profile() {
    return (
        <HStack
            padding={2}
            alignItems={"start"}
            bg={useColorModeValue("#0A131D")}
        >
            <SimpleSidebar />
            <Midsection />
        </HStack>
    );
}

export default Profile;

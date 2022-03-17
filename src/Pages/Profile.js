import { HStack, useColorModeValue, VStack } from "@chakra-ui/react";
import React from "react";
import ProfileBottom from "../Components/ProfileBottom";
import ProfileMidsection from "../Components/ProfileMidsection";
import SimpleSidebar from "../Components/sidebar";

function Profile() {
    return (
        <HStack
            padding={2}
            alignItems={"start"}
            bg={useColorModeValue("#0A131D")}
        >
            <SimpleSidebar />
            <VStack>
                <ProfileMidsection />
                <ProfileBottom />
            </VStack>
        </HStack>
    );
}

export default Profile;

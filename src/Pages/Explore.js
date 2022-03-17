import React from "react";
import { HStack, useColorModeValue, VStack } from "@chakra-ui/react";
import Searchbar from "../Components/searchbar";
import SimpleSidebar from "../Components/sidebar";
import Rightpane from "../Components/rightpane";
import Midsection from "../Components/Midsection";
import Bottom from "../Components/Bottom";
import ExploreSection from "../Components/ExploreSection";

function Explore() {
  return (
    <HStack padding={2} alignItems={"start"} bg={useColorModeValue("#0A131D")}>
      <SimpleSidebar />
      <ExploreSection />
      {/* <Searchbar />
      <Rightpane /> */}
    </HStack>
  );
}

export default Explore;

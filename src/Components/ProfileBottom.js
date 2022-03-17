import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

function ProfileBottom() {
  return (
    <Box
      bg={useColorModeValue("#11263E")}
      w={"full"}
      h={"66vh"}
      padding={"20px"}
      borderRadius={"10px"}
    >
      <Tabs variant="soft-rounded" colorScheme="purple">
        <TabList>
          <Tab mx="10px" width="100px">
            Posts
          </Tab>
          <Tab mx="10px" width="100px">
            Likes
          </Tab>
          <Tab mx="10px" width="100px">
            Comment
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default ProfileBottom;

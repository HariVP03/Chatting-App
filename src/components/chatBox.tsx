import React from "react";
import { Flex } from "@chakra-ui/react";

const ChatBox: React.FC = () => {
  return (
    <Flex minW="60%" minH="100%" overflowY="scroll" direction="column">
      <Flex minH="15%" bg="#caf0f8" w="100%" roundedBottomLeft="-2">
        dwdwdw
      </Flex>
      <Flex minH="150vh" bg="red">
        123
      </Flex>
    </Flex>
  );
};

export default ChatBox;

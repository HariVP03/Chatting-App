import React from "react";
import { Flex, chakra, Avatar, Text } from "@chakra-ui/react";

const MessagePreview: React.FC<{
  senderName: string;
  message: string;
  senderAvatar?: string;
  timeSent: Date;
}> = ({ senderName, message, senderAvatar, timeSent }) => {
  return (
    <Flex
      cursor="pointer"
      bg="gray.300"
      direction="column"
      border="1px solid"
      borderColor="gray.300"
      w="98%"
      my={1}
      minH="100px"
      maxH="100px"
      p={2}
      rounded="lg"
      overflowY="hidden"
      _hover={{ borderColor: "gray.400", shadow: "md" }}
    >
      <Flex>
        <Avatar mr={3} src={senderAvatar} />
        <Flex direction="column" ml={1}>
          <chakra.h4 mb={0}>
            {senderName}
            <Text fontWeight="normal" color="gray.500" mb={1}>
              {"an hour ago"}
            </Text>
          </chakra.h4>
          <Text>{message}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default MessagePreview;

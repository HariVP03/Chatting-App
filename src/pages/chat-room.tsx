import React from "react";
import { Flex, chakra, Input } from "@chakra-ui/react";
import MessagePreview from "../components/messagePreview";

const ChatRoom = () => {
  // TODO: FIX FONTS
  return (
    <Flex justify="center" align="center" minH="100vh" w="100vw" bg="#5E6472">
      <Flex minW="100vw" h="100vh" bg="gray.200">
        <Flex
          p={3}
          direction="column"
          minW="40%"
          minH="90%"
          borderRight="1px solid black"
          overflowY="scroll"
        >
          <Flex mb={3} direction="column">
            <chakra.h2 w="full" textAlign="center">
              Welcome to your chat room
            </chakra.h2>
            <Input
              type="search"
              placeholder="Search..."
              borderColor="gray.400"
            />
          </Flex>
          <Flex justify="center" direction="column">
            <MessagePreview
              senderName="Hari Vishnu Parashar"
              message="Hi There!"
              timeSent={new Date()}
            />
            <MessagePreview
              senderName="Hari Vishnu Parashar"
              message="Hi There!"
              timeSent={new Date()}
            />

            <MessagePreview
              senderName="Hari Vishnu Parashar"
              message="Hi There!"
              timeSent={new Date()}
            />
            <MessagePreview
              senderName="Hari Vishnu Parashar"
              message="Hi There!"
              timeSent={new Date()}
            />
            <MessagePreview
              senderName="Hari Vishnu Parashar"
              message="Hi There!"
              timeSent={new Date()}
            />
            <MessagePreview
              senderName="Hari Vishnu Parashar"
              message="Hi There!"
              timeSent={new Date()}
            />
            <MessagePreview
              senderName="Hari Vishnu Parashar"
              message="Hi There!"
              timeSent={new Date()}
            />
            <MessagePreview
              senderName="Hari Vishnu Parashar"
              message="Hi There!"
              timeSent={new Date()}
            />
            <MessagePreview
              senderName="Hari Vishnu Parashar"
              message="Hi There!"
              timeSent={new Date()}
            />
          </Flex>
        </Flex>
        <Flex minW="60%" minH="100%"></Flex>
      </Flex>
    </Flex>
  );
};

export default ChatRoom;

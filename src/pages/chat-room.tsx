import React from "react";
import { Flex, chakra, Input } from "@chakra-ui/react";
import MessagePreview from "../components/messagePreview";
import ChatBox from "../components/chatBox";
import "../components/layout.css";

const ChatRoom = () => {
  // TODO: FIX FONTS
  return (
    <Flex justify="center" align="center" h="100vh" w="100vw" bg="gray.800">
      <Flex minW="95vw" h="95vh" bg="#2b2d42" rounded="md">
        <Flex
          p={3}
          direction="column"
          minW="40%"
          minH="90%"
          roundedLeft="md"
          bg="#caf0f8"
          className="hide-scrollbar"
          overflowY="scroll"
        >
          <Flex mb={3} direction="column">
            <chakra.h1
              fontFamily="'Signika Negative', sans-serif"
              w="full"
              fontWeight="700"
              textAlign="center"
            >
              Welcome to your chat room
            </chakra.h1>
            <Input
              type="search"
              placeholder="Search..."
              borderColor="gray.400"
            />
          </Flex>
          <Flex justify="center" direction="column">
            <MessagePreview
              senderName="Hari Vishnu Parashar"
              message="Fugiat ad cillum ex occaecat."
              timeSent={new Date()}
            />
            <MessagePreview
              senderName="Leonardo Di Caprio"
              message="Enim dolore sit consequat ad proident..."
              timeSent={new Date()}
            />

            <MessagePreview
              senderName="Leonardo Da Vinci"
              message="Cupidatat voluptate qui dolore duis..."
              timeSent={new Date()}
            />
            <MessagePreview
              senderName="Elon Musk"
              message="Velit laboris nostrud consequat minim..."
              timeSent={new Date()}
            />
            <MessagePreview
              senderName="Bill Gates"
              message="Tempor ipsum velit duis et."
              timeSent={new Date()}
            />
            <MessagePreview
              senderName="Ryan Reynolds"
              message="Qui labore non in culpa Lorem."
              timeSent={new Date()}
            />
            <MessagePreview
              senderName="Eminem"
              message="Commodo eu eu consequat esse cillum aute..."
              timeSent={new Date()}
            />
            <MessagePreview
              senderName="John Doe"
              message="Magna reprehenderit anim sunt ipsum ..."
              timeSent={new Date()}
            />
            <MessagePreview
              senderName="Your mom"
              message="Ut excepteur magna occaecat irure..."
              timeSent={new Date()}
            />
          </Flex>
        </Flex>
        <ChatBox />
      </Flex>
    </Flex>
  );
};

export default ChatRoom;

import React, { useState } from "react";
import { Flex, chakra, Input } from "@chakra-ui/react";
import MessagePreview from "../components/messagePreview";
import ChatBox from "../components/chatBox";
import "../components/layout.css";

const ChatRoom = () => {
  // TODO: FIX FONTS
  const [data, setData] = useState<{
    senderName: string;
    senderStatus: "Online" | "Busy" | "Typing..." | "Offline" | "";
    senderAvatar: string | null;
  }>({ senderName: "", senderStatus: "", senderAvatar: null });
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
              handleOnClick={setData}
            />
            <MessagePreview
              senderName="Leonardo Di Caprio"
              message="Enim dolore sit consequat ad proident..."
              timeSent={new Date()}
              handleOnClick={setData}
            />
          </Flex>
        </Flex>
        <ChatBox
          senderName={data.senderName}
          senderStatus={data.senderStatus}
          senderAvatar={data.senderAvatar}
        />
      </Flex>
    </Flex>
  );
};

export default ChatRoom;

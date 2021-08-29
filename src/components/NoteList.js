import React from "react";

import { useSelector } from "react-redux";

import { Box, Flex, Text } from "@chakra-ui/react";

function NoteList() {
  const items = useSelector((state) => state.notes.items);

  return (
    <Flex justifyContent="center" flexWrap="wrap">
      <Box>
        {items.map((item) => {
          if (item.color === "#F06292") {
            return (
              <Box
                borderWidth="1px"
                borderRadius="lg"
                maxW={300}
                minW={300}
                m="2"
                p="1"
                bg={item.color}
              >
                <Text fontSize="20px">{item.title}</Text>
              </Box>
            );
          }
        })}
      </Box>
      <Box>
        {items.map((item) => {
          if (item.color === "#BA68C8") {
            return (
              <Box
                borderWidth="1px"
                borderRadius="lg"
                maxW={300}
                minW={300}
                m="2"
                p="1"
                bg={item.color}
              >
                <Text fontSize="20px">{item.title}</Text>
              </Box>
            );
          }
        })}
      </Box>
      <Box>
        {items.map((item) => {
          if (item.color === "#FFD54F") {
            return (
              <Box
                borderWidth="1px"
                borderRadius="lg"
                maxW={300}
                minW={300}
                m="2"
                p="1"
                bg={item.color}
              >
                <Text fontSize="20px">{item.title}</Text>
              </Box>
            );
          }
        })}
      </Box>
      <Box>
        {items.map((item) => {
          if (item.color === "#4FC3F9") {
            return (
              <Box
                borderWidth="1px"
                borderRadius="lg"
                maxW={300}
                minW={300}
                m="2"
                p="1"
                bg={item.color}
              >
                <Text fontSize="20px">{item.title}</Text>
              </Box>
            );
          }
        })}
      </Box>
      <Box>
        {items.map((item) => {
          if (item.color === "#AED581") {
            return (
              <Box
                borderWidth="1px"
                borderRadius="lg"
                maxW={300}
                minW={300}
                m="2"
                p="1"
                bg={item.color}
              >
                <Text fontSize="20px">{item.title}</Text>
              </Box>
            );
          }
        })}
      </Box>
    </Flex>
  );
}

export default NoteList;

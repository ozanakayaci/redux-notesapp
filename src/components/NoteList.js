import React from "react";

import { useSelector } from "react-redux";

import { Box, Flex, Text } from "@chakra-ui/react";

function NoteList() {
  const items = useSelector((state) => state.notes.items);

  return (
    <Flex justifyContent="center" flexWrap="wrap">
      <Box>
        {items.map((item, i) => {
          return (
            <Box key={i}>
              {item.color === "#F06292" && (
                <Box
                  borderWidth="1px"
                  borderRadius="lg"
                  maxW={320}
                  minW={320}
                  m="1"
                  p="1"
                  bg={item.color}
                >
                  <Text fontSize="20px">{item.title}</Text>
                </Box>
              )}
            </Box>
          );
        })}
      </Box>
      <Box>
        {items.map((item, i) => {
          return (
            <Box key={i}>
              {item.color === "#BA68C8" && (
                <Box
                  borderWidth="1px"
                  borderRadius="lg"
                  maxW={320}
                  minW={320}
                  m="1"
                  p="1"
                  bg={item.color}
                >
                  <Text fontSize="20px">{item.title}</Text>
                </Box>
              )}
            </Box>
          );
        })}
      </Box>
      <Box>
        {items.map((item, i) => {
          return (
            <Box key={i}>
              {item.color === "#FFD54F" && (
                <Box
                  borderWidth="1px"
                  borderRadius="lg"
                  maxW={320}
                  minW={320}
                  m="1"
                  p="1"
                  bg={item.color}
                >
                  <Text fontSize="20px">{item.title}</Text>
                </Box>
              )}
            </Box>
          );
        })}
      </Box>
      <Box>
        {items.map((item, i) => {
          return (
            <Box key={i}>
              {item.color === "#4FC3F9" && (
                <Box
                  borderWidth="1px"
                  borderRadius="lg"
                  maxW={320}
                  minW={320}
                  m="1"
                  p="1"
                  bg={item.color}
                >
                  <Text fontSize="20px">{item.title}</Text>
                </Box>
              )}
            </Box>
          );
        })}
      </Box>
      <Box>
        {items.map((item, i) => {
          return (
            <Box key={i}>
              {item.color === "#AED581" && (
                <Box
                  borderWidth="1px"
                  borderRadius="lg"
                  maxW={320}
                  minW={320}
                  m="1"
                  p="1"
                  bg={item.color}
                >
                  <Text fontSize="20px">{item.title}</Text>
                </Box>
              )}
            </Box>
          );
        })}
      </Box>
    </Flex>
  );
}

export default NoteList;

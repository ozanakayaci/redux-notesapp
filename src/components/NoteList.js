import { useSelector } from "react-redux";

import { useEffect } from "react";

import { Box, Flex, Text, Button } from "@chakra-ui/react";

import { useDispatch } from "react-redux";
import { destroy } from "../redux/notes/notesSlice";

function NoteList() {
  const filterText = useSelector((state) => state.notes.filterText);

  const items = useSelector((state) => state.notes.items);

  const dispatch = useDispatch();

  const filteredNotes = items.filter((item) => {
    return Object.keys(item).some(
      (prop) =>
        prop === "title" &&
        item[prop] !== undefined &&
        item[prop].toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });

  useEffect(() => {
    console.log("sa");
  }, [items]);

  return (
    <Flex justifyContent="center" flexWrap="wrap">
      <Box>
        {filteredNotes.map((item, i) => {
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
                  display="flex"
                  justifyContent="space-between"
                >
                  <Text fontSize="20px">{item.title}</Text>
                  <Button
                    _hover={{ bg: "#ff0000" }}
                    colorScheme="F06292"
                    mt="2px"
                    size="xs"
                    onClick={() => dispatch(destroy(item.id))}
                  >
                    X
                  </Button>
                </Box>
              )}
            </Box>
          );
        })}
      </Box>
      <Box>
        {filteredNotes.map((item, i) => {
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
                  display="flex"
                  justifyContent="space-between"
                >
                  <Text fontSize="20px">{item.title}</Text>
                  <Button
                    _hover={{ bg: "#ff0000" }}
                    colorScheme="BA68C8"
                    mt="2px"
                    size="xs"
                    onClick={() => dispatch(destroy(item.id))}
                  >
                    X
                  </Button>
                </Box>
              )}
            </Box>
          );
        })}
      </Box>
      <Box>
        {filteredNotes.map((item, i) => {
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
                  display="flex"
                  justifyContent="space-between"
                >
                  <Text fontSize="20px">{item.title}</Text>
                  <Button
                    _hover={{ bg: "#ff0000" }}
                    colorScheme="FFD54F"
                    mt="2px"
                    size="xs"
                    onClick={() => dispatch(destroy(item.id))}
                  >
                    X
                  </Button>
                </Box>
              )}
            </Box>
          );
        })}
      </Box>
      <Box>
        {filteredNotes.map((item, i) => {
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
                  display="flex"
                  justifyContent="space-between"
                >
                  <Text fontSize="20px">{item.title}</Text>
                  <Button
                    _hover={{ bg: "#ff0000" }}
                    colorScheme="4FC3F9"
                    mt="2px"
                    size="xs"
                    onClick={() => dispatch(destroy(item.id))}
                  >
                    X
                  </Button>
                </Box>
              )}
            </Box>
          );
        })}
      </Box>
      <Box>
        {filteredNotes.map((item, i) => {
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
                  display="flex"
                  justifyContent="space-between"
                >
                  <Text fontSize="20px">{item.title}</Text>
                  <Button
                    colorScheme="AED581"
                    _hover={{ bg: "#ff0000" }}
                    mt="2px"
                    size="xs"
                    onClick={() => dispatch(destroy(item.id))}
                  >
                    X
                  </Button>
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

import { useSelector } from "react-redux";

import { useEffect } from "react";

import { Box, Flex, Text, Button } from "@chakra-ui/react";

import { useDispatch } from "react-redux";
import { destroy } from "../redux/notes/notesSlice";

function NoteList() {
  const filterText = useSelector((state) => state.notes.filterText);
  const colorCodes = useSelector((state) => state.notes.colors);

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
      {colorCodes.map((colorCode, index) => {
        return (
          <Box key={index}>
            {filteredNotes.map((item, i) => {
              return (
                <>
                  {item.color === colorCode && (
                    <Box
                      key={i}
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
                        _hover={{ bg: "#f1f1f1", color: colorCode }}
                        colorScheme={colorCode.slice(1, 6)}
                        mt="2px"
                        size="xs"
                        onClick={() => dispatch(destroy(item.id))}
                      >
                        X
                      </Button>
                    </Box>
                  )}
                </>
              );
            })}
          </Box>
        );
      })}
    </Flex>
  );
}

export default NoteList;

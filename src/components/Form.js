import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Textarea, Box, Button } from "@chakra-ui/react";

import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addNewNote, selectColor } from "../redux/notes/notesSlice";

function Form() {
  let [title, setTitle] = useState();

  const colors = useSelector((state) => state.notes.colors);
  const selectedColor = useSelector((state) => state.notes.selectedColor);

  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("color", selectedColor);
  }, [selectedColor]);

  let handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addNewNote({ id: nanoid(3), title, color: selectedColor }));

    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <Textarea
        colorScheme="red"
        value={title}
        onChange={handleInputChange}
        onSubmit={() => console.log("baaşarılı")}
        size="md"
        maxW={1000}
        placeholder="Enter your note here..."
      />

      <Box mt="2" display="flex" maxW={1000}>
        <Box display="flex">
          {colors.map((item, i) => {
            return (
              <Box
                key={i}
                mr="2"
                className={selectedColor === item ? "palet selected" : "palet"}
                bg={item}
                onClick={() => dispatch(selectColor(item))}
              ></Box>
            );
          })}
        </Box>
        <Button type="submit" colorScheme="teal" variant="outline">
          Add
        </Button>
      </Box>
    </form>
  );
}

export default Form;

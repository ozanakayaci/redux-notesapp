import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Textarea, Box, Button } from "@chakra-ui/react";

function Form() {
  let [value, setValue] = useState();
  let [selectedColor, setSelectedColor] = useState(
    localStorage.getItem("color") === null
      ? "#F06292"
      : localStorage.getItem("color")
  );
  useEffect(() => {
    localStorage.setItem("color", selectedColor);
  }, [selectedColor]);

  let handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const colors = useSelector((state) => state.notes.colors);
  return (
    <Box m="10" display="flex" alignItems="center" flexDirection="column">
      <Textarea
        colorScheme="red"
        value={value}
        onChange={handleInputChange}
        onSubmit={() => console.log("baaşarılı")}
        size="md"
        maxW={1000}
        placeholder="Enter your note here..."
      />

      <Box mt="2" display="flex" maxW={1000}>
        <Box display="flex">
          {colors.map((item) => {
            return (
              <Box
                mr="2"
                className={selectedColor === item ? "palet selected" : "palet"}
                bg={item}
                onClick={() => setSelectedColor(item)}
              ></Box>
            );
          })}
        </Box>
        <Button colorScheme="teal" variant="outline">
          Add
        </Button>
      </Box>
    </Box>
  );
}

export default Form;

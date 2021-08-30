import React from "react";

import { Input } from "@chakra-ui/react";

import { filterNotes } from "../redux/notes/notesSlice";
import { useDispatch } from "react-redux";

function Search() {
  const dispatch = useDispatch();

  let handleChange = (e) => {
    dispatch(filterNotes(e.target.value));
  };

  return (
    <div>
      <Input
        maxW={320}
        type="text"
        placeholder="Search"
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;

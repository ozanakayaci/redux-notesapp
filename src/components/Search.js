import React from "react";

import { Input } from "@chakra-ui/react";

function Search() {
  return (
    <div>
      <Input maxW={400} type="text" placeholder="Search" />
    </div>
  );
}

export default Search;

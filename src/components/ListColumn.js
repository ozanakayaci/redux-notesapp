import React from "react";

function ListColumn() {
  return (
    <Box>
      {items.map((item, i) => {
        return (
          <>
            {item.color === "#F06292" && (
              <Box
                key={i}
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
          </>
        );
      })}
    </Box>
  );
}

export default ListColumn;

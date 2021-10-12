import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: JSON.parse(localStorage.getItem("notes")) || [
      {
        id: "1",
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, sint.",
        color: "#F06292",
      },
      {
        id: "2",
        title: "Non, in minima? Corrupti iusto harum rerum, magni minus nobis",
        color: "#BA68C8",
      },
      {
        id: "3",
        title:
          "Cumque totam illo nulla alias omnis cum excepturi numquam consequatur",
        color: "#FFD54F",
      },
      {
        id: "4",
        title:
          "Iste maiores nulla blanditiis facilis. Beatae facilis molestiae dolore doloremque",
        color: "#4FC3F9",
      },
      {
        id: "5",
        title:
          "Deleniti ullam magni asperiores velit doloribus. Et, beatae! Ad, voluptatum.",
        color: "#AED581",
      },
      { id: "6", title: "Lorem ipsum dolor sit amet.", color: "#AED581" },
    ],
    colors: ["#F06292", "#BA68C8", "#FFD54F", "#4FC3F9", "#AED581"],
    selectedColor: localStorage.getItem("color") || "#F06292",
    filterText: "",
  },
  reducers: {
    addNewNote: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("notes", JSON.stringify(state.items));
    },
    selectColor: (state, action) => {
      state.selectedColor = action.payload;
    },
    filterNotes: (state, action) => {
      state.filterText = action.payload;
    },
    destroy: (state, action) => {
      const id = action.payload;
      const filtered = state.items.filter((item) => item.id !== id);
      state.items = filtered;
      localStorage.setItem("notes", JSON.stringify(filtered));
    },
  },
});

export const { addNewNote, selectColor, filterNotes, destroy } =
  notesSlice.actions;
export default notesSlice.reducer;

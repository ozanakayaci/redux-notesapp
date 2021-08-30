import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [
      { id: "1", title: "note1", color: "#F06292" },
      { id: "2", title: "note2", color: "#BA68C8" },
      { id: "3", title: "note3", color: "#FFD54F" },
      { id: "4", title: "note4", color: "#4FC3F9" },
      { id: "5", title: "note5", color: "#AED581" },
      { id: "6", title: "note6", color: "#AED581" },
    ],
    colors: ["#F06292", "#BA68C8", "#FFD54F", "#4FC3F9", "#AED581"],
    selectedColor: localStorage.getItem("color") || "#F06292",
    filterText: "",
  },
  reducers: {
    addNewNote: (state, action) => {
      state.items.push(action.payload);
    },
    selectColor: (state, action) => {
      state.selectedColor = action.payload;
    },
    filterNotes: (state, action) => {
      state.filterText = action.payload;
    },
  },
});

export const { addNewNote, selectColor, filterNotes } = notesSlice.actions;
export default notesSlice.reducer;

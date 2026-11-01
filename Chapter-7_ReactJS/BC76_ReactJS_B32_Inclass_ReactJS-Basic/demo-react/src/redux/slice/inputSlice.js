// rxsplice
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hoTen: "Quang Khải",
};

const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {},
});

export const {} = inputSlice.actions;

export default inputSlice.reducer;

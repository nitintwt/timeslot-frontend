import { configureStore } from "@reduxjs/toolkit";
import slotsSlice from "./slotsSlice";

const store = configureStore({
  reducer:{
    slots: slotsSlice,
  }
})

export default store
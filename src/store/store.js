import { configureStore } from "@reduxjs/toolkit";
import slotsSlice from "./slotsSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer:{
    slots: slotsSlice,
    user: userSlice
  }
})

export default store
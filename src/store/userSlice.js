import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDbId : null
}

const userSlice = createSlice ({
  name: "user",
  initialState,
  reducers:{
    saveId: (state , action)=>{
      state.userDbId = action.payload
    }
  }
})

export const {saveId}= userSlice.actions

export default userSlice.reducer
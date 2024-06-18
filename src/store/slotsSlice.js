import { createSlice } from "@reduxjs/toolkit";

const initialState ={
  slots:[]
}

const slotsSlice = createSlice({
  name:'slots',
  initialState,
  reducers:{
    createSlot: (state , action)=>{
      state.slots.push(action.payload);
    }
  }
})

export const {createSlot} = slotsSlice.actions

export default slotsSlice.reducer
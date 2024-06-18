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
    },
    deleteSlot :(state , action)=>{
      const startTime = action.payload
      state.slots = state.slots.filter((slot)=> slot.startTime !== startTime)
    }
  }
})

export const {createSlot , deleteSlot} = slotsSlice.actions

export default slotsSlice.reducer
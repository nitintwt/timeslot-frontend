import { createSlice } from "@reduxjs/toolkit";

const initialState ={
  slots:[
    {
    date: null,
    startTime:null,
    endTime: null,
    paid: false
    }
  ]
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
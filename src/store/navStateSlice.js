import { createSlice } from '@reduxjs/toolkit'

const navState = createSlice({
  name:'navState',
  initialState:{isOpen : false},
  reducers:{
    navOpen(state){
      state.isOpen = true
    },
    navClose(state){
      state.isOpen = false
    }
  }
})

export const { navOpen, navClose } = navState.actions;
export default navState.reducer;
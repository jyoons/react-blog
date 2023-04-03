import { createSlice } from '@reduxjs/toolkit'

const modalState = createSlice({
  name:'modalState',
  initialState:{isOpen : false},
  reducers:{
    modalOpen(state){
      state.isOpen = true
    },
    modalClose(state){
      state.isOpen = false
    }
  }
})

export const { modalOpen, modalClose } = modalState.actions;
export default modalState.reducer;
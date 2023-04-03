import { configureStore } from '@reduxjs/toolkit'
import navState from './navStateSlice';
import postState from './postsSlice';
import modalState from './modalStateSlice';

export default configureStore({
  reducer:{
    postState : postState,
    navState : navState,
    modalState : modalState
  }
})
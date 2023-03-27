import { configureStore } from '@reduxjs/toolkit'
import navState from './navStateSlice';
import postState from './postsSlice';

export default configureStore({
  reducer:{
    postState : postState,
    navState : navState
  }
})

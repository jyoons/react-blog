import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
// const axios = require("axios");
// const API_URL = "http://localhost:5000/posts";

const postState = createSlice({
  name:'postState',
  initialState:{
    data:[]
  },
  reducers:{
    getPosts(state, action){ //data 받기
      state.data = [action.payload]
    },
    addPosts(state, action){ // data updata
      state.data.push(action.payload)
    }
  }
})

export const getTPostsync = (data) => async (dispatch) => {
  try{
    const response = await axios.get('http://localhost:5000/posts');
    dispatch(getPosts(response.data));
  }catch(error){
    console.log('error', error);
  }
};

export const addPostAsync = (data) => async (dispatch) => {
  try {
    // console.log(data);
    const response = await axios.post('http://localhost:5000/posts', data);
    dispatch(addPosts(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const { getPosts, addPosts } = postState.actions;
export default postState.reducer;
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
    const response = await axios.get('https://my-json-server.typicode.com/jyoons/react-blog/posts');
    dispatch(getPosts(response.data));
  }catch(error){
    console.log('error', error);
  }
};

export const addPostAsync = (data) => async (dispatch) => {
  try {
    // console.log(data);
    const response = await axios.post('https://my-json-server.typicode.com/jyoons/react-blog/posts', data);
    // console.log(response);
    dispatch(addPosts(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const { getPosts, addPosts } = postState.actions;
export default postState.reducer;
// export const showPost = (state) => state.posts.data;


// import { createSlice } from "@reduxjs/toolkit";
// const axios = require("axios");
// const API_URL = "https://jsonplaceholder.typicode.com/todos";

// export const todoSlide = createSlice({
//   name: "todo",
//   initialState: {
//     data: []
//   },
//   reducers: {
//     addTodo: (state, action) => {
//       state.data.push(action.payload);
//     },
//     getTodo: (state, action) => {
//       state.data = [action.payload];
//     }
//   }
// });

// export const getTodoAsync = (data) => async (dispatch) => {
//   try {
//     const response = await axios.get(`${API_URL}/${data}`);
//     dispatch(getTodo(response.data));
//   } catch (err) {
//     throw new Error(err);
//   }
// };

// export const addTodoAsync = (data) => async (dispatch) => {
//   try {
//     // console.log(data);
//     const response = await axios.post(API_URL, data);
//     // console.log(response);
//     dispatch(addTodo(response.data));
//   } catch (err) {
//     throw new Error(err);
//   }
// };

// export const { addTodo, getTodo } = todoSlide.actions;
// export const showTodo = (state) => state.todo.data;
// export default todoSlide.reducer;

// https://jyoons.github.io/react-blog/db/data.json
// https://my-json-server.typicode.com/jyoons/react-blog/db/data
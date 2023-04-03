import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Menu1 from '../pages/Menu1'
import Menu2 from '../pages/Menu2'
import Menu3 from '../pages/Menu3'
import Menu2Dep1 from '../pages/Menu2/Menu2Dep1'
import Menu2Dep2 from '../pages/Menu2/Menu2Dep2'
import Menu3Dep1 from '../pages/Menu3/Menu3Dep1'
import MainPage from '../pages/Main/MainPage'
import PostList from '../pages/Posts/PostList'
import PostDetail from '../pages/Posts/PostDetail'
import PostAdd from '../pages/Posts/PostAdd'
import PostEdit from '../pages/Posts/PostEdit'

export default function Router() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<MainPage/>}></Route>
        <Route path="Menu1" element={<Menu1/>}></Route>
        <Route path="Menu2" element={<Menu2/>}></Route>
        <Route path="Menu2/Menu2Dep1" element={<Menu2Dep1/>}></Route>
        <Route path="Menu2/Menu2Dep2" element={<Menu2Dep2/>}></Route>
        <Route path="Menu3" element={<Menu3/>}></Route>
        <Route path="Menu3/Menu3Dep1" element={<Menu3Dep1/>}></Route>
        <Route path="/Posts/PostList" element={<PostList/>}></Route>
        <Route path="/Posts/PostDetail/:postid" element={<PostDetail/>}></Route>
        <Route path="/Posts/PostAdd" element={<PostAdd/>}></Route>
        <Route path="/Posts/PostEdit/:postid" element={<PostEdit/>}></Route>
      </Route>
  </Routes>
  )
}
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getTPostsync } from '../../store/postsSlice' 
export default function PostDetail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getTPostsync());
  }, [dispatch])
  let { postid } = useParams(); // 파라미터값 가져옴
  const postState = useSelector((state) => state.postState.data[0]);

  if(postState){
    const post = postState.filter((posts) => posts.id === postid);
    return (
      <div>
        <div className='postDetail-wrap'>
          <div>{ post[0].title }</div>
          <div>{ post[0].contents }</div>
          <div>{  post[0].date }</div>
        </div>
        <div className='btn-wrap'>
          <button className="btn btn-primary" onClick={() => navigate('/Posts/PostList')}>목록</button>
          <button className="btn btn-primary" onClick={() => navigate(`/Posts/PostEdit/${postid}`)}>수정</button>
        </div>
      </div>
    )
  }
  else{
    <div>loading</div>
  }
}
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getTPostsync } from '../../store/postsSlice' 
export default function PostDetail() {
  let { postDetailIdx } = useParams(); // 파라미터값 가져옴
  const postState = useSelector((state) => state.postState.data[0]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getTPostsync());
  }, [dispatch])
  if(postState){
    return (
      <div>
        <div className='postDetail-wrap'>
          <div>{ postState[postDetailIdx].title }</div>
          <div>{ postState[postDetailIdx].date }</div>
        </div>
        <div>{ postState[postDetailIdx].contents }</div>
        <div className='btn-wrap'>
          <button className="btn btn-primary" onClick={() => navigate('/Posts/PostList')}>목록</button>
          <button className="btn btn-primary" onClick={() => navigate('/Posts/PostAdd')}>등록</button>
          <button className="btn btn-primary" onClick={() => navigate('/Posts/PostEdit')}>수정</button>
        </div>
      </div>
    )
  }
}
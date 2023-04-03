import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate} from 'react-router-dom';
import { getTPostsync } from '../../store/postsSlice' 

export default function PostList() {
  const navigate = useNavigate() ;
  const postState = useSelector((state) => state.postState.data[0]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTPostsync());
  }, [dispatch])
  return (
    <div>
       <div className=''>
          <button className="btn btn-primary" onClick={() => navigate('/Posts/PostAdd')}>등록</button>
        </div>
      <ul>
        {postState && postState.map((post, index) => (//첫 렌더링시 state값을 받아오지 못하기 때문에 초기값을 설정해줘야 함
          <li key={post.id}>
            <NavLink to={`/Posts/PostDetail/${post.id}`} title="자세히 보기">
              <div>{index+1}</div>
              <div>{post.title}</div>
              <div>{post.date}</div>
            </NavLink>
        </li>
        ))}
      </ul>
    </div>
  )
}

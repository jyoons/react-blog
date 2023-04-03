import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { getTPostsync } from '../../store/postsSlice' 

export default function PostEdit() {
  const { postid } = useParams();
  const postState = useSelector((state) => state.postState.data[0]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getTPostsync());
  }, [dispatch])

  if(postState){
    const post = postState.filter((posts) => posts.id === postid);
    return (
      <div>
        <form className="dataList">
          <div className="dataList-items">
            <div>제목</div>
            <div>
              <input
              type="text"
              name="input1"
              className="input"
              placeholder="제목입력하기"
              value={post[0].title}
              />
            </div>
          </div>
          <div className="dataList-items">
            <div>내용</div>
            <div>
              <textarea placeholder="내용을 입력하세요." name="textarea1" value={post[0].contents}></textarea>
            </div>
          </div>
          <div className='btn-wrap'>
            <button className="btn btn-primary">수정</button>
            <button className="btn btn-primary" onClick={() => navigate('/Posts/PostList')}>목록</button>
            <button className="btn btn-secondary" onClick={() => navigate(`/Posts/PostDetail/${postid}`)}>취소</button>
          </div>
        </form>
      </div>
    )
  }
}

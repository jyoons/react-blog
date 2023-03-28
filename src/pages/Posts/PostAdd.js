import axios from 'axios';
import moment from 'moment/moment';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { addPostAsync } from '../../store/postsSlice' 
import { getTPostsync } from '../../store/postsSlice' 

export default function PostAdd() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const postState = useSelector((state) => state.postState.data[0]);
  const [inputs, setInputs] = useState({
    input1:'',
    textarea1 : ''
  })
  const { input1, textarea1 } = inputs;
  const hadleChange = (e) => {
    const { value, name } = e.target;
    const newInputs ={...inputs, [name]: value }
    setInputs(newInputs)

  }
  const handleEvent = (e) =>{
    e.preventDefault();
    let newPost = {
      title: inputs.input1,
      date :moment().format('YYYY-MM-DD:ss'),
      contents :inputs.textarea1
    }
    dispatch(addPostAsync(newPost)); 
  }

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
            onChange={hadleChange}
            value={input1}
            />
          </div>
        </div>
        <div className="dataList-items">
          <div>내용</div>
          <div>
            <textarea placeholder="내용을 입력하세요." onChange={hadleChange}  value={textarea1} name="textarea1"></textarea>
          </div>
        </div>
        <div className='btn-wrap'>
          <button className="btn btn-primary" onClick={handleEvent}>등록</button>
          <button className="btn btn-secondary" onClick={() => navigate('/Posts/PostList')}>취소</button>
        </div>
      </form>
    </div>
  )
}
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Modal.css'
import { modalClose } from '../store/modalStateSlice'
import { addPostAsync } from '../store/postsSlice' 
import moment from 'moment/moment'
import { useNavigate } from 'react-router-dom'

export default function Modal({title, content, postSubmit}) {
  const modalState = useSelector(state => state.modalState.isOpen);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const postEvent = () => {
    let newPost = {
      title : postSubmit.input1,
      date : moment().format('YYYY-MM-DD:ss'),
      contents :postSubmit.textarea1
    }
    dispatch(addPostAsync(newPost));
    navigate('/Posts/PostList');
  }
  return (
    <div>
      <div className={`modal-wrapper ${modalState ? 'open' : 'close'}`}>
        <div className="modal">
          <div className="modal-header">
            <div className="title">{title}</div>
            <div className="btn-close" onClick={() => dispatch(modalClose())}>X</div>
          </div>
          <div className="modal-conts">
           {content}
          </div>
          <div className='btn-wrap'>
            <button className="btn btn-primary" onClick={postEvent}>등록</button>
            <button className="btn btn-secondary" onClick={() => dispatch(modalClose())}>취소</button>
          </div>
        </div>
      </div>
    </div>
  )
}
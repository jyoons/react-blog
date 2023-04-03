
import React, {useState } from 'react'
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom'
import Modal from '../../Modal/Modal';
import { modalOpen } from '../../store/modalStateSlice'

export default function PostAdd() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
  // const modalState = useSelector((state) => state.modalState.isOpen);
  const handleEvent = (e) =>{
    e.preventDefault();
    dispatch(modalOpen());
    // let newPost = {
    //   title: inputs.input1,
    //   date :moment().format('YYYY-MM-DD:ss'),
    //   contents :inputs.textarea1
    // }
    // dispatch(addPostAsync(newPost));
  }
  const modalCont = () =>{
    return(
      <div>
        <dl className="data-list">
          <dt>제목</dt>
          <dd>{inputs.input1}</dd>
          <dt>내용</dt>
          <dd>{inputs.textarea1}</dd>
        </dl>
      </div>
    )
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
      <Modal content={modalCont()} title='게시글 등록 확인' postSubmit={inputs}></Modal>
    </div>
  )
}
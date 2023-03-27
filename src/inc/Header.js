import {ReactComponent as Logo} from '../images/logo.svg';
import {ReactComponent as MenuBtn} from '../images/icon-menu.svg';
import { NavLink } from 'react-router-dom'
import Nav from '../components/Nav'
import '../css/Header.css'
import { useDispatch, useSelector } from 'react-redux';
import { navOpen } from '../store/navStateSlice'


export default function Header() {
  const dispatch = useDispatch();
  const navState = useSelector((state) => state.navState.isOpen);
  return (
    <div className='header'>
      <div className='logo'>
        <NavLink to='/'>
            <Logo fill="#FFF"/>
        </NavLink>
      </div>
      <button onClick={() => dispatch(navOpen())} className={`btn-menu ${navState? 'open' : '' }`}>
        <MenuBtn fill="#FFF"/>
      </button>
      <Nav aria-hidden='true'/>
    </div>
  )
}
import {NavLink, useNavigate} from 'react-router-dom'
import { MenuItems } from '../data/menuItems.js'
import './Nav.css'
import { useDispatch, useSelector } from 'react-redux';
import { navClose } from '../store/navStateSlice'
import { useRef } from 'react';
import { useOnClickOutside } from '../hooks/useOnClickOutshide.js';

export default function Nav() {
  const menuItems = MenuItems;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navState = useSelector(state => state.navState.isOpen);
  const ref = useRef();
  useOnClickOutside(ref, ()=>{
    dispatch(navClose())
  })
  return (
    <div className={`${navState ? 'open' : 'close'} nav-wrap`}>
      <div className="nav-contents" ref={ref}>
        <div className="nav-utils">
          <button className="btn-home" 
            onClick={()=>{
              dispatch(navClose());
              navigate('/');
            }}
          >
            <img src={require('../images/icon-home.svg').default} alt="go home"/>
            </button>
          <button className="btn-close" onClick={() => dispatch(navClose())}><img src={require('../images/icon-close.svg').default} alt="close nav"/></button>
        </div>
        <nav className='nav-list'>
          <ul>
            { menuItems.map((menu, index) => (
              <li key={index}>
                <NavLink to={menu.url} className={({ isActive }) => (isActive ? "navLink-active" : "navLink")}>{menu.title}</NavLink>
                  {menu.subMenu ? (
                      <ul>
                        {menu.subMenu.map((submenu, sindex) => (
                          <li key={sindex}>
                            <NavLink to={submenu.url} className={({ isActive }) => (isActive ? "navLink-active" : "navLink")}>{submenu.title}</NavLink>
                          </li>
                        ))}
                      </ul>
                    ) 
                  : ''}
                </li>
            ))}
          </ul>
        </nav>
        </div>
    </div>
  )
}
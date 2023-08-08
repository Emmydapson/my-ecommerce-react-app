import React from 'react'
import { FaTruck } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { CiShoppingCart } from 'react-icons/ci';
import { FaUserCircle } from 'react-icons/fa';
import { BiLogInCircle } from 'react-icons/bi';
import { BiLogOutCircle } from 'react-icons/bi';
import { Link,  } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import './nav.css'
const Nav = () => {
    const { loginWithRedirect } = useAuth0();
  return (
    <>
    <div className='free'>
        
            <div className='icon'>
                <FaTruck />
            </div> 
            <p>
            FREE Shipping on orders up to #50,000
            </p>
    </div>
    <div className='main_header'>
        <div className='container'>
            <div className='logo'>
                <img src='./img/dicotalogo.png' alt='logo'></img>
            </div>
            <div className='search_box'>
                <input type='text' value='' placeholder='Search Dicota' autoComplete='off' ></input>
                <button>Search</button>
            </div>
                <div className='icon'>
                    <div className='account'>
                        <div className='user_icon'>
                            <FaUserCircle />
                        </div>
                        <p>Hello, User</p>
                    </div>
                    <div className='second_icon'>
                        <Link to="/" className='link'><AiOutlineHeart /></Link>
                        <Link to="/cart" className='link'><CiShoppingCart /></Link>
                    </div>
                </div>
            </div>
        </div>
        <div className='header'>
            <div className='container'>
                <div className='nav'>
                <ul>
                    <li>
                        <Link to='/' className='link'>Home</Link>
                    </li>
                    <li>
                        <Link to='/product' className='link'>Product</Link>
                    </li>
                    <li>
                        <Link to='/about' className='link'>About</Link>
                    </li>
                    <li>
                        <Link to='/contact' className='link'>Contact</Link>
                    </li>
                </ul>
                </div>
                
                <div className='auth'>
                    <button onClick={() => loginWithRedirect()}><BiLogInCircle /></button>
                    <button><BiLogOutCircle /></button>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Nav
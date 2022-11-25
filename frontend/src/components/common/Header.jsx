import React from 'react'
import Headers from '../../assets/css/Headers.css';
import HeadersMobileCSS from '../../assets/css/mobile/Headers-Mobile.css';
import a2z from '../../assets/img/azlogowhite.png';
import search from '../../assets/img/search.svg'
import profile from '../../assets/img/profile.svg'
import Signup from '../container/Signup';
import Signin from '../container/Signin';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { BsFillCartFill } from 'react-icons/bs';
import { BsArrowBarDown } from 'react-icons/bs';


function Header() {
  return (
    <div className='head'>
       <div className="logo">
            <Link to='/'>
                <img src={a2z} alt="" />
            </Link>
        </div>
    
        <div className="center-nav">
            <div className="nav-category">
                <span className="nav-category-span">All Categories</span>
            </div>
            <input className="nav-input" type="text" placeholder="search here..." />
            <button className="nav-button">
                <img className="nav-button-image" src={search} alt="search" />
            </button>
        </div>
        <div className='profile-photo-block'>
            <Link to='/Signin'>
                    <img src={profile} alt="profile-photo" />
            </Link>
        </div>
    
        <div className='cart-header'>
            <Link id='cart-icon' to='/Cart'>
                <BsFillCartFill />
            </Link>
            <p id='items-in-cart-prompt'>Items in cart:</p>
            <p id='items-in-cart-value'>2</p>
            <span id='arrow-bar-down'>
                <BsArrowBarDown />
            </span>
        </div>
    </div>
  )
}

export default Header
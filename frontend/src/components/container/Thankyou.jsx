import React from 'react';
import ThankyouCSS from '../../assets/css/Thankyou.css';
import { BrowserRouter, Route, Link } from "react-router-dom";


function Order() {
  return (
    <div>
        <div className='order-items-header'>
            <p id='order-items-header-text'>Thank you for ordering</p>
        </div>
        <div className='thank-you-for-ordering-box'>
            <p className='thank-you-for-ordering'>Thank you for ordering. We received your request.<br></br>
Our staff will be contacting with you to tell next steps.</p>
        </div>
        <div className='submit-button-box'>
            <Link to='/'>
                <button id='submit-button-order'>BACK TO HOME</button>
            </Link>
        </div>
    </div>
  )
}

export default Order
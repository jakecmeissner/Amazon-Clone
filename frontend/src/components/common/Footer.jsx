import React from 'react'
import Footers from '../../assets/css/Footers.css';
import FootersMobile from '../../assets/css/mobile/Footers-Mobile.css';
import a2z from '../../assets/img/azlogo.png';


function Footer() {
  return (
    <div className='footer'>
        <div className="refresh-panel">
          <div>
              <p id="sub">
                  Subscribe to our newsletter and<br />
              receive exclusive offers every week
              </p>
          </div>
          <div className="input-box">
              <input id='input-email' type="text" placeholder="Enter your email..." />
          </div>
          <div>
              <button id="subscribe-button">Subscribe</button>
          </div>
      </div>

      <div className="copyright">
          <img src={a2z} alt="" />
          <p id="foo">High-quality materials are made just for you. Designed for modern Guys and Girls</p>
          <div className="contact-form">
              <h id="contact">Contact</h>
              <p id="contacts">E-maildrink@refresh.com | Hotline: +1 131 138 138</p>
        </div>
        <hr className='spacing-line-footer' />
        <h id="design">DESIGN BY REFRESH - © 2022. ALL RIGHTS RESERVED.</h>

      </div>
    </div>
  )
}

export default Footer
import React from 'react';
import HomeCSS from '../../assets/css/Home.css';
import SigninCSS from '../../assets/css/Signin.css';
import SigninMobileCSS from '../../assets/css/mobile/Signin-Mobile.css'
import { BrowserRouter, Route, Link } from "react-router-dom";
import { BsApple } from 'react-icons/bs';
import { BsXLg } from 'react-icons/bs';
import Home from './Home.jsx';
import bag from '../../assets/img/bag.png';
import banner from '../../assets/img/banner.png';
import headphone from '../../assets/img/headphone.png';
import watch3 from '../../assets/img/watch3.png';
import shoe from '../../assets/img/shoe.png';
import jacket2 from '../../assets/img/jacket2.png';
import trouser from '../../assets/img/trouser.png';
import watch2 from '../../assets/img/wath2.png';
import redshoe from '../../assets/img/redshoe.png';
import tshirt4 from '../../assets/img/tshirt4.png';
import tshirt3 from '../../assets/img/tshirt3.png';
import tshirt2 from '../../assets/img/tshirt2.png';
import tshirt1 from '../../assets/img/tshirt1.png';

function Signin() {
  return (
    <div>
        <menu>
            <div className="category">
                <p>
                    Shop by Category
                    <img src="" alt="" />
                </p>
            </div>
            <div className="sub-menu"> 
                <div className="menu-links">
                    <a href="/">Users</a>
                </div>
                <div className="menu-links">
                    <a href="/">Today's Deals</a>
                </div>
                <div className="menu-links">
                    <a href="/">A2Z Pay</a>
                </div>
                <div className="links">
                    <a href="/">Sell</a>
                </div>
                <div className="customer">
                    <a href="/">Customer Service</a>
                </div>
            </div>
        </menu>

        <div className="signin-account-box">
            <div className="signin-account">
                <Link className='exit' to='/'>
                    <BsXLg />
                </Link>
                <h1 className="signin-account-title">Log In</h1>
                <p className="signin-account-subtitle">Sign in to explore your membership benefits...</p>
                <form action="">
                    <div className="signin-account-input-field">
                        {/* <input className="create-account-input" type="text" placeholder="User Name" /> */}
                        <input className="signin-account-input" type="text" placeholder="Email" />
                        <input className="signin-account-input" type="text" placeholder="Password" />
                    </div>
                    <div className="checkbox-field">
                        <input className='signin-checkbox' type="checkbox" />
                        <span className="signin-account-checkbox">Keep me signed in</span>
                        <span className='forgot-password'>Forgot password?</span>
                    </div>
                    <button className="signin-account-button">Sign In</button>
                    <div className="not-member-signup">
                        <span id='not-member-yet'>Not a member yet?</span>
                        <Link id='Sign-up-link' to='/Signup'>
                            Sign Up
                        </Link>
                    </div>
                </form>

            </div>
            <div className="gray-box"></div>
        </div>

        {/* <Home /> */}

        <section className="main-image">
            <img src={banner} alt="" />
        </section>

        <section className="section-1">
                <div className="recently-viewed">
                    <h4 id="heading-text">Your recently viewed Items & feature recommendations</h4>
                </div>
                <div className="item">
                    <div className="item-flex">
                        <img src={headphone} alt="" />
                        <div className="item-details">
                            <p>Headphones</p>
                            <p>BEATS BY DRE</p>
                            <h className="price">&#8377 3500</h>
                        </div>
                    </div>
                    <div className="item-flex">
                        <img src={watch3} alt="" />
                        <div className="item-details">
                            <p>Men Wrist Watch</p>
                            <p>TAUGHER</p>
                            <p className="price">&#8377 7150</p>
                        </div>
                    </div>
                    <div className="item-flex">
                        <img src={shoe} alt="" />
                        <div className="item-details">
                            <p>Canvas Shoes</p>
                            <p>NIKE</p>
                            <p className="price">&#8377 3500</p>
                        </div>
                    </div>
                    <div className="item-flex">
                        <img src={bag} alt="" />
                        <div className="item-details">
                            <p>Luggage Bag</p>
                            <p>AMERICAN TOURISTER</p>
                            <p className="price">&#8377 1500</p>
                        </div>
                    </div>
                    <div className="item-flex">
                        <img src={jacket2} alt="" />
                        <div className="item-details">
                            <p>Long Jacket</p>
                            <p>FORT COLLINS</p>
                            <p className="price">&#8377 8599</p>
                        </div>
                    </div>
                </div>
        </section>

        <div className="product-heading">
                <h2 id="heading-text">Amazon - Today's Deal</h2>
        </div>
        
        <section className="items-container">
                <div className="item-grid">
                    <div className="item">
                        <div className="item-background">
                            <div className="item-image">
                                <img src={trouser} alt="" />
                            </div>
                        </div>
                        <div className="item-bottom">
                            <div className="item-price">
                                <h5>Night Pants</h5>
                                <p>
                                    $199.99
                                </p>
                                <button className="add-cart">
                                    ADD TO CART
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="item-background">
                            <div className="item-image">
                                <img src={watch2} alt="" />
                            </div>
                        </div>
                        <div className="item-bottom">
                            <div className="item-price">
                                <h5>Watch</h5>
                                <p>
                                    $99.99
                                </p>
                                <button className="add-cart">
                                    ADD TO CART
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-background">
                            <div className="item-image">
                                <img src={redshoe} alt="" />
                            </div>
                        </div>
                        <div className="item-bottom">
                            <div className="item-price">
                                <h5>Ladies Shoe</h5>
                                <p>
                                    $59.99
                                </p>
                                <button className="add-cart">
                                    ADD TO CART
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-background">
                            <div className="item-image">
                                <img src={jacket2} alt="" />
                            </div>
                        </div>
                        <div className="item-bottom">
                            <div className="item-price">
                                <h5>Jacket</h5>
                                <p>
                                    $399.99
                                </p>
                                <button className="add-cart">
                                    ADD TO CART
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-background">
                            <div className="item-image">
                                <img src={tshirt4} alt="" />
                            </div>
                        </div>
                        <div className="item-bottom">
                            <div className="item-price">
                                <h5>Robot Ninja</h5>
                                <p>
                                    $119.99
                                </p>
                                <button className="add-cart">
                                    ADD TO CART
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-background">
                            <div className="item-image">
                                <img src={tshirt3} alt="" />
                            </div>
                        </div>
                        <div className="item-bottom">
                            <div className="item-price">
                                <h5>Cycling</h5>
                                <p>
                                    $169.99
                                </p>
                                <button className="add-cart">
                                    ADD TO CART
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-background">
                            <div className="item-image">
                                <img src={tshirt2} alt="" />
                            </div>
                        </div>
                        <div className="item-bottom">
                            <div className="item-price">
                                <h5>Winter Camp</h5>
                                <p>
                                    $299.99
                                </p>
                                <button className="add-cart">
                                    ADD TO CART
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-background">
                            <div className="item-image">
                                <img src={tshirt1} alt="" />
                            </div>
                        </div>
                        <div className="item-bottom">
                            <div className="item-price">
                                <div>
                                    <h5>Mandelbaum's</h5>
                                    <p>
                                        $199.99
                                    </p>
                                </div>
                                <div>
                                    <button className="add-cart">
                                        ADD TO CART
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
   </div>
  )
}

export default Signin;
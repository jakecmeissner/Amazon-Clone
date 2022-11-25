import React from 'react';
import { useState, useRef } from 'react';
import HomeCSS from '../../assets/css/Home.css';
import SignupCSS from '../../assets/css/Signup.css'
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
import axios from 'axios';

function Signup() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [previewImage, setPreviewImage] = useState(null);
    const [image, setImage] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const inputFile = useRef(null);

    const inputUserName = e => {
        setUserName(e.target.value);
    };

    const inputEmail = e => {
        setEmail(e.target.value);
    };

    const inputPassword = e => {
        setPassword(e.target.value);
    };

    const inputImage = event => {
        const file = event.target.files[0];
        const objectUrl = URL.createObjectURL(file);
        setPreviewImage(objectUrl);
        setImage(file);
    };

    const [data, setData] = useState([]);

    const msg = () => {
        alert('success');
    };

    const reload = () => {
        return window.location.reload(0)
    }

    const sendData = (e) => {
        e.preventDefault();
        console.log('data was sent');

        axios.post('http://127.0.0.1:8000/s/add/', {
            "username": userName,
            "email": email,
            "password": password,
        }).then((res) => {
            console.log(res.data);
            setData(res.data);
            msg();
            reload();
        })
    }

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

        <div className="create-account-box">
            <div className="create-account">
                <Link className='exit' to='/'>
                    <BsXLg />
                </Link>
                <h1 className="create-account-title">Create an account and discover the benefits</h1>
                <p className="create-account-subtitle">Sign up and create an account with us to explore all the benefits of our business marketplace</p>
                <form action="">
                    <div className="create-account-input-field">
                        <input className="create-account-input" type="text" placeholder="User Name" onChange={inputUserName} required />
                        <input className="create-account-input" type="text" placeholder="Email" onChange={inputEmail} required />
                        <input className="create-account-input" type="text" placeholder="Password" onChange={inputPassword} required />
                        <input type="file" ref={inputFile} onChange={inputImage} />
                        {previewImage && (
                            <div className="upload-area">
                                <img
                                    name="image"
                                    type="file"
                                    src={previewImage}
                                    className={`upload-image ${previewImage ? 'preview-image' : ''}`}
                                    alt="Upload"
                                />
                            </div>
                        )}
                    </div>
                    <div className="checkbox-field">
                        <input className='checkbox' type="checkbox" required />
                        <span className="google-terms">I agree to the Google Terms of Service and
                            Privacy Policy</span>
                    </div>
                    <button className="create-account-button" onClick={sendData}>Sign Up</button>
                    <p id='signin-prompt'>Are you already a member?</p>
                    <Link id='signin-link' to='/Signin'>
                            Sign In
                    </Link>
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

export default Signup
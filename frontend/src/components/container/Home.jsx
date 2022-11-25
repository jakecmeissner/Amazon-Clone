import React from 'react';
import HomeCSS from '../../assets/css/Home.css';
import HomeMobileCSS from '../../assets/css/mobile/Home-Mobile.css';
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

function Home() {
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

        <section className="main-image">
            <img src={banner} alt="" />
        </section>

        <section className="section-1">
                <div className="recently-viewed">
                    <h4 id="heading-text">Your recently viewed Items & feature recommendations</h4>
                </div>
                <hr className='line-seperator-for-featured'></hr>
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

        <hr className='line-seperator-for-deal'></hr>

        
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
                                <div  className='item-info'>
                                    <h5>Winter Camp</h5>
                                    <p>
                                        $299.99
                                    </p>
                                </div>
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
                                <div className='item-info'>
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

export default Home
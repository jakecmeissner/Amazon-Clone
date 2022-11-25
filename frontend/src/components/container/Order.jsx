import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import OrderCSS from '../../assets/css/Order.css';

function Order() {
  return (
    <div>
        <div className='order-items-header'>
            <p id='order-items-header-text'>Order your items</p>
        </div>
        <div className='order-slip'>
            <p id='shipment-details'>Shipment Details</p>
            <p id='check-details'>Please check your details and confirm it...</p>
            <div className='item-order-detail'>
                <p id='product-name-order-detail'>Printero Pullover</p>
                <p id='product-quantity-order-detail'>1</p>
                <div id='product-price-order-detail'>
                    <p id='product-price-order-detail-raw'>$150</p>
                </div>
            </div>
            <div className='item-order-detail'>
                <p id='product-name-order-detail'>Printero Gun Print Design</p>
                <p id='product-quantity-order-detail2'>1</p>
                <div id='product-price-order-detail'>
                    <p id='product-price-order-detail-raw'>$79</p>
                </div>
            </div>
            <hr className='seperator'></hr>
            <div className='total-price-detail'>
                <p id='total-price-raw'>Total Price</p>
                <p id='total-price-quantity'>2</p>
                <div id='total-price-box'>
                    <p id='total-price-value'>$229</p>
                </div>
            </div>
        </div>
        <hr className='seperator-orange'></hr>
        <form className='customer-info-form'>
            <div className='customer-info-piece'>
                <h3 id='customer-info-heading'>Full Name</h3>
                <input id='customer-info-input' placeholder="Enter recipient's full name..." />
            </div>
            <div className='customer-info-piece'>
                <h3 id='customer-info-heading'>Phone Number</h3>
                <input id='customer-info-input' placeholder="Enter phone number..." />
            </div>
            <div className='customer-info-piece'>
                <h3 id='customer-info-heading'>Street Address or P.O. Box</h3>
                <input id='customer-info-input' placeholder="Enter street address or P.O. box..." />
            </div>
            <div className='customer-info-piece'>
                <h3 id='customer-info-heading'>Zip Code</h3>
                <input id='customer-info-input' placeholder="Enter zip code..." />
            </div>
            <div className='customer-info-piece'>
                <h3 id='customer-info-heading'>Apartment, Suite, Unit, Building, Floor, etc.</h3>
                <input id='customer-info-input' placeholder="Apartment, suite, unit, building, floor, etc..." />
            </div>
            <div className='customer-info-piece'>
                <h3 id='customer-info-heading'>City</h3>
                <input id='customer-info-input' placeholder="Enter city..." />
            </div>
            <div className='customer-info-piece'>
                <h3 id='customer-info-heading'>State</h3>
                <input id='customer-info-input' placeholder="Enter state..." />
            </div>
            <div className='submit-button-box'>
                <Link to='/Thankyou'>
                    <button id='submit-button-order'>SUBMIT</button>
                </Link>
            </div>
        </form>
    </div>
  )
}

export default Order
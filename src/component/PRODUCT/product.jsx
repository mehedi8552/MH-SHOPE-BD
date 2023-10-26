import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import   './product.css'

const product = (props) => {
    //console.log(addproduct);
    const {name,img,seller,price,stock,star} = props.Product;

    
    return (
        <div className='product'>
            <div className='img-container'>
                <img src={img} alt="" />
            </div>
            <div className='item-container'>
            <h3>{name}</h3>
            <h5>By:  {seller}</h5>
            <h4>${price}</h4>
            <h5>Only {stock} left in stock- order soon.</h5>
            <h5>star:{star}</h5>
            <button className='main-btn'><FontAwesomeIcon icon={faCartShopping} />Add to card</button>
            </div>
            
        </div>
    );
};

export default product;
import React from 'react';
import   './product.css'

const product = (props) => {
    const {name,img,seller,price,stock,star} = props.product;

console.log(props.product.name);
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
            </div>
            
        </div>
    );
};

export default product;
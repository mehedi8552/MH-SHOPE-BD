
import { useState } from 'react';
import fakeData from '../../fakeData/products.json';
import Product from '../PRODUCT/product'
import './Shope.css'





const Shope = () => {
const data10 = fakeData.slice(0,11);
const [products,productset] = useState(data10)
    return (   
  
            <div className='shoping-container'>
                <div className='product-container'>
                {
                    products.map(

                        data => <Product product ={data}></Product>
                    )
                }

            </div> 
            <div className='card-container'>
                <h1>Hi i am shoping card</h1>
            </div>
            </div>  
    )             

};

export default Shope;
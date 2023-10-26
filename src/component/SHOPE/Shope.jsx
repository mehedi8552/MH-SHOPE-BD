
import { useState } from 'react';
import fakeData from '../../fakeData/products.json';
import Product from '../PRODUCT/product'
import './Shope.css'





const Shope = () => {

    const data11 = fakeData.slice(0,11);
    const [products,productset] = useState(data11)
   function addproduct(){
            console.log("productAdded");
    }
    return (   
  
            <div className='shoping-container'>
                <div className='product-container'>
               {
                products.map(
                    
                         data => <Product 
                         addproduct = {addproduct}
                         Product={data}></Product> 
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
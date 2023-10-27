
import { useState } from 'react';
import fakeData from '../../fakeData/products.json';
import Product from '../PRODUCT/product'
import Card from '../CARD/Card'
import './Shope.css'





const Shope = () => {
    function addcard(Product){
        const newCard = [...card,Product];
        setCard(newCard);
      
    }
    const data11 = fakeData.slice(0,11);
    const [products,productset] = useState(data11);
    const [card,setCard] = useState([])
    
    return (   
  
            <div className='shoping-container'>
                <div className='p-container'>
               {
                products.map(
                    
                         data => <Product 
                         adcard = {addcard}
                         Product={data}></Product> 
                )
               }

            </div> 
            <div className='card-container'>
                <Card card = {card}></Card>
            </div>
            </div>  
    )             

};

export default Shope;
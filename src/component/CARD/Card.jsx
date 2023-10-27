import React from 'react';

const Card = (props) => {
        const card = props.card;
        //const totalprice = card.reduce((total,add)=> total + add.price,0);
        //total price count->
        let total = 0;
        for (let i=0;i< card.length;i++){
            const product = card[i];
            total = total + product.price;
        }
        //shiping cost count->
        let shipingcost = 0;
        if(total> 40){
            shipingcost = 0; 
        }
        else if(total>20){
            shipingcost = 8.99;
        }
        else if(total > 0){
            shipingcost =12.99;
        }
        //vat price->
        let vat = total / 10;
        // all totall price add->
        const  allprice = (shipingcost+vat+total)
    return (
        <div>
            <h1>Order summary</h1>
            <h4>Product Added:{card.length}</h4>
            <h4>Shiping cost:{shipingcost}</h4>
            <h4>Vat+tax:{(vat).toFixed(2)}</h4>
            <h4>Product price:{(total).toFixed(2)}</h4>
            <p>total price:{(allprice).toFixed(2)}</p>
        </div>
    );
};

export default Card;
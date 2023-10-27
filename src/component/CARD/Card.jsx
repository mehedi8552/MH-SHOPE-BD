import React from 'react';

const Card = (props) => {
    return (
        <div>
            <h4>Product Added:{props.card.length}</h4>
        </div>
    );
};

export default Card;
import React from 'react';

const Cart = ({ cart }) => {
    const { name, img, price } = cart;
    return (
        <div className="d-flex align-items-center rounded shadow mb-3 pe-3">
            <img src={img} width="120" alt="" />
            <div className="text-start ms-3">
                <h6>{name}</h6>
                <p>Price: ${price}</p></div>
        </div>
    );
};

export default Cart;
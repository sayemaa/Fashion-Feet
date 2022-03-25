import React from 'react';

const Cart = ({ cart }) => {
    const { name, img } = cart;
    return (
        <div className="d-flex align-items-center rounded shadow mb-3">
            <img src={img} width="120" alt="" />
            <h6 className="text-start ms-3">{name}</h6>
        </div>
    );
};

export default Cart;
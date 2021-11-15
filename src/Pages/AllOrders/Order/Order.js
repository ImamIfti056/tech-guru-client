import React from 'react';
import './Order.css';

const Order = (props) => {

    const {name, price, description} = props.order.product;
    return (
        <div className='container single-order'>
            <h4 className='fw-bold'>Product: <span className="text-success">{name}</span></h4>
            <hr />
            <p className='fs-5'>{description}</p>
            <h5><span className="fw-bold">Price:</span> {price} tk.</h5>
        </div>
    );
};

export default Order;
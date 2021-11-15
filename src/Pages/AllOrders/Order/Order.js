import React from 'react';
import './Order.css';

const Order = (props) => {
    const {name, price, description} = props.order.product;
    const {_id} = props.order;

    const handleDeleteOrder = id => {
        const proceed = window.confirm("Are you sure you want to delete?");
        console.log(proceed);
        if(proceed){
            console.log("idnside");
            const url = `http://localhost:5000/allorders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount){
                    alert("Order Deleted");
                }
            })
        }
    }

    return (
        <div className='container single-order'>
            <h4 className='fw-bold'>Product: <span className="text-success">{name}</span></h4>
            <hr />
            <p className='fs-5'>{description}</p>
            <h5><span className="fw-bold">Price:</span> {price} tk.</h5>
            <button onClick={() => handleDeleteOrder(_id)} className="btn-sm btn-danger">Delete Order</button>
        </div>
    );
};

export default Order;
import React, { useEffect, useState } from 'react';
import Order from './Order/Order';

const AllOrders = () => {

    const [orders, setOrders] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/allorders')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])

    return (
        <div className='container'>
            <h2 className="text-center text-primary my-5">Total Orders: {orders.length}</h2>
            <hr/>
            {
                orders.map(order => <Order
                key={order._id}
                order={order}
                ></Order>)
            }
        </div>
    );
};

export default AllOrders;
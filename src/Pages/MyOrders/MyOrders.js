import React, {useState, useEffect} from 'react';
import Order from '../AllOrders/Order/Order';
import useAuth from '../../hook/useAuth';

const MyOrders = () => {

    const [orders, setOrders] = useState([]);
    const {user} = useAuth();

    useEffect( () => {
        fetch('http://localhost:5000/allorders')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])

    let myOrders = orders.filter(order =>  order.buyerEmail == user.email)
    console.log(myOrders)

    return (
        <div className='container'>
            <h2 className="text-center text-primary my-5">My Orders: {myOrders.length}</h2>
            <hr/>
            {
                myOrders.map(order => <Order
                key={order._id}
                order={order}
                ></Order>)
            }
        </div>
    );
};

export default MyOrders;
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react/cjs/react.development';
import useAuth from '../../hook/useAuth';

const Purchase = () => {

    const { id } = useParams();
    const {user} = useAuth();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://vast-meadow-55322.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[])

    let product = products.find(p => p.id == id);
    console.log(product)

    // handle buy now
    const handleBuy = e => {
        e.preventDefault();
        const newOrder = {product: product, buyer: user.displayName, buyerEmail: user.email}

        fetch( 'http://localhost:5000/allorders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Your order has been placed.');
            }
        })

    }

    return (
        <div className='container'>
            <h1 className="text-center text-primary mt-5">Place your order!</h1>
            <hr/>
            <div className="row row-cols-1 row-cols-md-3 align-items-start g-4">
                <div className="product-img col-md-5 col-12">
                    <img className='img-fluid' src={product?.img} alt="product-img" />
                </div>
                <div className="m-auto col-md-7 col-12 p-4">
                    <h2 className='text-danger'>{product?.name}</h2>
                    <p>{product?.description}</p>
                    <h3><span className="fw-bold">Price:</span> {product?.price}</h3>
                    <h5><span className="fw-bold">Brand:</span> {product?.brand}</h5>
                    <h5><span className="fw-bold">Rating:</span> {product?.rating}</h5>
                </div>
            </div>

            <form className='my-5 mx-auto w-75 text-center'>
                <h2><span className="fw-bold">User Name: </span>{user.displayName}</h2>
                <h4><span className="fw-bold">User Email: </span>{user.email}</h4>
                <button onClick={handleBuy} className="btn btn-outline-primary  mt-3">Buy Now!</button>
            </form>
        </div>
    );
};

export default Purchase;
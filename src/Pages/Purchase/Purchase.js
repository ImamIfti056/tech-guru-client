import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react/cjs/react.development';
import useAuth from '../../hook/useAuth';

const Purchase = () => {

    const { id } = useParams();
    const {user} = useAuth();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[])

    let product = products.find(p => p.id == id);

    return (
        <div className='container'>
            {id} th 
            <h2>{product?.name}</h2>
            <h3>{user.email}</h3>
            <h3>{user.displayName}</h3>
        </div>
    );
};

export default Purchase;
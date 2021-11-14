import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Product from '../../Products/Product/Product';

const HomeProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    // Products for home page
    const HomeProducts = products.filter(product => product.id < 7 );

    return (
        <div className='container'>
            <h1 className='text-center text-primary my-5'>Total Products: {HomeProducts.length}</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                HomeProducts.map(product => <Product
                key={product.id}
                product={product}
                ></Product>)
            }
            </div>
        </div>
    );
};

export default HomeProducts;
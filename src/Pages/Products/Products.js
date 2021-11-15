import React, { useEffect, useState } from 'react';
import Product from './Product/Product';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=> {
        fetch('https://vast-meadow-55322.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div className='container'>
            <h1 className='text-center text-primary my-5'>Total Products: {products.length}</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                products.map(product => <Product
                key={product.id}
                product={product}
                ></Product>)
            }
            </div>
        </div>
    );
};

export default Products;
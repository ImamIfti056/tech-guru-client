import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {id, name, img, price, description, brand, rating} = props.product;

    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="product-img" />
                <div className="card-body bg-dark text-light">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <Link to={`purchase/${id}`}><button className="btn btn-primary">Buy</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Product;
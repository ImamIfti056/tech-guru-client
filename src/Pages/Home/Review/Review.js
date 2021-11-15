import React from 'react';
import './Review.css';

const Review = (props) => {
    const {name, review, rating} = props.review;
    return (
        <div className='container single-review'>
            <h4 className='fw-bold'>Buyer: <span className="text-success">{name}</span></h4>
            <hr />
            <p className='fs-5'>{review}</p>
            <p><span className="fw-bold">Rating:</span> {rating}</p>
        </div>
    );
};

export default Review;
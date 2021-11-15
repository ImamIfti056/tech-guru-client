import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])

    return (
        <div className='reviews'>
            <div className='container'>
                <h2 className='text-center fw-bold my-5 text-primary'>Buyer Reviews</h2>
                {
                    reviews.map(review => <Review
                    key={review._id}
                    review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;
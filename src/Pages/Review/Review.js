import React, { useRef } from 'react';
import useAuth from '../../hook/useAuth';

const Review = () => {

    const {user} = useAuth();
    const reviewRef = useRef();
    const ratingRef = useRef();
    
    const handleReview = (e) => {
        e.preventDefault();
        let review = reviewRef.current.value;
        let rating = ratingRef.current.value;
        const newReview = {review: review, rating: rating, email: user.email, name: user.displayName};
        console.log(newReview);
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Your Review has been Placed');
                }
            });


    }


    return (
        <div className='my-3 p-5'>
            <div className="container">
                <h1 className="text-center text-primary">Write Your Review</h1>
                <p className="text-center text-secondary">Give us your feedbach so that we can fillup our gaps.</p>
                <form onSubmit={handleReview} className='my-4'>
                    <div className='input-group'>
                        <textarea className='form-control' name="review" placeholder='Write your review here...' cols="30" rows="10" ref={reviewRef} required></textarea>
                    </div>
                    <div className='input-group my-3'>
                        <input type='number' className='form-control' name='rate' step='any' min='0' max='5' placeholder='Rating(0-5)' ref={ratingRef} />
                    </div>
                    <input className='mt-3 btn btn-outline-primary' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default Review;
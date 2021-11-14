import React from 'react';

const Review = () => {
    return (
        <div className='my-3 p-5'>
            <div className="container">
                <h1 className="text-center text-primary">Write Your Review</h1>
                <p className="text-center text-secondary">Give us your feedbach so that we can fillup our gaps.</p>
                <div className='input-group my-4'>
                    <textarea className='form-control' name="review" placeholder='Write your review here...' cols="30" rows="10"></textarea>                    
                </div>
                <input className='btn btn-outline-primary' type="submit" value="Submit" />
            </div>
        </div>
    );
};

export default Review;
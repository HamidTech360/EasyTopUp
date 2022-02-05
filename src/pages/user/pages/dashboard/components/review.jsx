import React from 'react';

import '../css/review.css'

const Review = () => {
    return ( 
        <div className="review">
            <input type="text" className="form-control" />
            <button className="btn btn-success btn-review">Leave a review message</button>
        </div>
     );
}
 
export default Review;
import React from 'react';
import './Review.css';

const Review = (props) => {

    const {name, description, ratings} = props.review

    return (
        <div className='review'>
            <h4>Name:{name}</h4>
            <p>Client say:{description}</p>
            <p><small>Ratings:{ratings}</small></p>
        </div>
    );
};

export default Review;
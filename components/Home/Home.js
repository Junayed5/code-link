import React from 'react';
import { Link } from 'react-router-dom';
import useReview from '../../hooks/useReview';
import ReviewDetail from '../ReviewDetail/ReviewDetail';
import './Home.css';

const Home = () => {
    const [reviews] = useReview();
    return (
        <div>
            <div className='product'>
                <div className="product-name">
                    <h1>Kawasaki Ninja H2R</h1>
                    <h1>Your next dream</h1>
                    <p>The Kawasaki Ninja H2®R is the world's most powerful supercharged hypersport closed-course motorcycle. Experience the 998cc engine.Maximum power with Ram Air, 240.0 kW 326 PS\ / 14,000 rpm ; Maximum torque, 165.0 N.m 16.8 kgf.m / 12,500 rpm ;</p>
                </div>
                <div className="product-img">
                    <img src="https://www.kawasaki-india.com/wp-content/uploads/2017/12/19ZX1000Y_201GY3DRF1CG_A.jpg" alt="" />
                </div>
            </div>
            <div>
                <h1>Customer Review(3)</h1>
                <div className="review-detail">
                    {
                        (reviews.slice(0,3)).map(review =>  <ReviewDetail
                            key={review.id}
                            review={review}
                        />)
                    }
                </div>
                <Link to='/review'><button className='review-btn'>See all review</button></Link>
            </div>
        </div>
    );
};

export default Home;
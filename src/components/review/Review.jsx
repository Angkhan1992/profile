import React from 'react'
import './Review.css'
import { reviewsData } from "../../data/ReviewData"
import starFill from '../../assets/img/star-fill.svg'
import star from '../../assets/img/star.svg'

const Review = () => {
    return (
        <div className="reviews" id='reviews'>
            <div className="reviews-header">Client's <span className='stroke-text'> What to say?</span></div>
            <div className="reviews-content">
                {reviewsData.map((review) => (
                    <div className="review">
                        <div className="review-h">
                            {review.avatar}
                            <div className='review-i'>
                                <span>{review.name}</span>
                                <span>{review.title}</span>
                            </div>
                        </div>
                        <div className="review-s">
                            {[...Array(5)].map((x, i) => (
                                <img src={i < review.star? starFill : star} alt="star" />
                            ))}
                        </div>
                        <div className="review-c">
                            {review.review}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Review
import React from 'react';
import './Customer.css'

const Customer = (props) => {
    const {name, ratings, img, review, email} =props.user;
    return (
        <div className='customer'>
            <div className='customer-title'>
            <img src={img} alt="" />
            <div>
            <h1>{name}</h1>
            <small>{email}</small>
            </div>
            </div>
            <h6>{review}</h6>
            <p>Rating : {ratings}</p>
        </div>
    );
};

export default Customer;
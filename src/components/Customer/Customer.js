import React from 'react';
import './Customer.css'

const Customer = (props) => {
    const {name, ratings} =props.user;
    return (
        <div className='customer'>
            <h1>{name}</h1>
            <p>{ratings} /<small>5</small></p>
        </div>
    );
};

export default Customer;
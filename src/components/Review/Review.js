import React, { useEffect, useState } from 'react';
import useUsers from '../../hooks/useUsers';
import Customer from '../Customer/Customer';
import './Review.css'

const Review = () => {
    const [users, setUsers] = useUsers();
    return (
        <div className='review'>
            {
                users.map(user=> <Customer 
                    key={user.id}
                    user={user}
                ></Customer>)
            }
        </div>
    );
};

export default Review;
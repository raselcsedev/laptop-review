import React from 'react';
import { Link } from 'react-router-dom';
import pic from "../../assets/laptop.jpg";
import useUsers from '../../hooks/useUsers';
import Customer from '../Customer/Customer';
import './Home.css'

const Home = () => {
    const [users, setUsers] = useUsers();
    return (
        <>
        <div className='home-profile'>
            <div className='profile-title'>
                <h1>Choose Your Next Laptop</h1>
                <h2>Choose Your Best Laptop</h2>
                <p>Our experts test and rate hundreds of products each year. We are updating our roundups all the time, so you always know what is best to buy. See the latest top picks in our most popular categories...</p>
                <button>Live Demo</button>
            </div>
            <div>
                <img src={pic} alt="" />
            </div>
        </div>
        <div >
            <h1 className='customer-reviews-title'>Customer Reviews</h1>
            <div className='customer-reviews'>
            {
                users.slice(0, 3).map(user=> <Customer 
                    key={user.id}
                    user={user}
                ></Customer>)
            }
            </div>
            <div className='reviews-button-section'>
            <button className='review-button'> <Link className='review-link' to='/review'>See All Reviews</Link> </button>
            </div>
        </div>
        </>
    );
};

export default Home;
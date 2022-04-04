import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>

            <div className='link-container'>
                <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")}to='/'>Home</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")}to='/review'>Review</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")}to='/dashboard'>Dashboard</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")}to='/blog'>Blog</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")}to='/about'>About</NavLink>
                
            </div>
        </nav>
    );
};

export default Header;
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <div className='title'>
                    <h2> QuizAce</h2>
                </div>
                <div className='navbar'>
                    <Link to='/'>Home</Link>
                    <Link to='/quiz'>Quiz</Link>
                    <Link to='/statistics'>Statistics</Link>
                    <Link to='/blog'>Blog</Link>
                </div>
            </nav>

        </div>

    );
};

export default Header;
import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
//import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {
    // const [open, setOpen] = useState(false);
    return (
        <div>
            <nav className='header p-5 font-semibold text-xl'>
                <div className='title text-3xl'>
                    <h2> QuizAce</h2>
                </div>
                <div className='navbar text-white '>
                    <Link to='/'>Home</Link>
                    <Link to='/'>Topics</Link>
                    <Link to='/statistics'>Statistics</Link>
                    <Link to='/blog'>Blog</Link>
                </div>
            </nav>

        </div>

    );
};

export default Header;
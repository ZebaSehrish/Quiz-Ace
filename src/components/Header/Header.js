import { Link } from 'react-router-dom';
import './Header.css';

//import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {
    return (
        <div>
            <nav className='header p-5 font-semibold text-xl'>
                <div className='title font-bold text-3xl text-white'>
                    <Link to='/'>Quiz Ace</Link>
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
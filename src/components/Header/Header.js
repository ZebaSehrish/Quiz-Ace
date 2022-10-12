import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='header p-5 font-semibold text-xl'>
                <div className='title font-bold text-3xl text-white'>
                    <Link className='hover:text-blue-300' to='/'>Quiz Ace</Link>
                </div>
                <div className='navbar text-white '>
                    <Link className='hover:text-violet-800' to='/'>Home</Link>
                    <Link className='hover:text-violet-800' to='/'>Topics</Link>
                    <Link className='hover:text-violet-800' to='/statistics'>Statistics</Link>
                    <Link className='hover:text-violet-800' to='/blog'>Blog</Link>
                </div>
            </nav>

        </div>

    );
};

export default Header;
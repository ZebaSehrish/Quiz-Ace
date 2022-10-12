import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Options = ({ option, handleAlert, notify }) => {

    return (
        <div className='p-5 sm:px-5 lg:px-20 mt-10 bg-white border-4 border-white rounded-lg text-center' >
            <input onClick={() => handleAlert(option)} type="radio" name='option' />    {option}
            <ToastContainer />
        </div>
    );
};

export default Options;
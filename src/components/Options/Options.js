import React from 'react';

const Options = ({ option, handleAlert }) => {

    return (
        <div className='p-5 sm:px-5 lg:px-20 mt-10 bg-white border-4 border-white rounded-lg text-center' >
            <input onClick={() => handleAlert(option)} type="radio" name='option' />        {option}
        </div>
    );
};
//
//onClick={() => handleAlert()}
export default Options;
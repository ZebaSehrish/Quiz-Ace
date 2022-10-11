import React from 'react';

const Options = ({ option }) => {
    console.log(option);
    return (
        <div className='px-32 mt-10 border-4 border-white rounded-lg' >
            <p>{option}</p>
        </div>
    );
};

export default Options;
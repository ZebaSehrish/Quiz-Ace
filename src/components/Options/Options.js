import React from 'react';

const Options = ({ option }) => {
    //console.log(option);
    return (
        <div className='p-5 px-28 mt-10 bg-white border-4 border-white rounded-lg' >
            {/* <p>{option}</p> */}
            {/* <label><input type='radio' />{option}</label> */}
            <input type="radio" />{option}
        </div>
    );
};

export default Options;
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quizes = ({ quiz }) => {
    console.log(quiz);
    return (
        <div className=' m-12 p-4 bg-blue-100 border-4 border-white rounded'>
            <div>
                <img src={quiz.logo} alt="" />
                <div className='grid grid-cols-2 mt-4'>
                    <p className='font-bold text-violet-900'>{quiz.name}</p>
                    <button className='p-1 ml-6 bg-violet-500 rounded-full text-white'>Take A Quiz</button>
                </div>

            </div>
        </div>
    );
};

export default Quizes;
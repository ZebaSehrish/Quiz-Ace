import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';


const Quiz = ({ quiz }) => {
    const { id, name, logo } = quiz;
    //console.log(quiz);
    return (
        <div className=' m-12 p-4 bg-blue-100 border-4 border-white rounded-t-lg'>
            <div>
                <img src={logo} alt="" />
                <div className='grid grid-cols-2 mt-4'>
                    <p className='font-bold text-violet-900'>{name}</p>
                    <div className='flex flex-1  bg-violet-500  text-white rounded-full'>
                        <button className='p-1 px-2 bg-violet-500  text-white rounded-full'  ><Link to={`/quizDetails/${id}`}>Take A Quiz </Link></button> <ArrowRightIcon className='w-4'></ArrowRightIcon>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Quiz;
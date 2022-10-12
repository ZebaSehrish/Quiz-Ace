import React from 'react';
import './Quiz.css';
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';


const Quiz = ({ quiz }) => {
    const { id, name, logo, total } = quiz;



    return (
        <div>
            <div className='card hover:border-violet-500 m-12 p-4 bg-blue-100 border-4 border-white rounded-t-lg'>
                <div className=''>
                    <img src={logo} alt="" />
                    <div className=' grid grid-cols-2 mt-4'>
                        <p className='font-bold text-violet-900'>{name}</p>
                        <div className='flex flex-1  bg-violet-500  text-white rounded-full'>
                            <button className='p-1 px-2 bg-violet-500  text-white rounded-full'  ><Link to={`/quizDetails/${id}`}>Take A Quiz </Link></button> <ArrowRightIcon className='w-4'></ArrowRightIcon>
                        </div>

                    </div>

                </div>
                <br />
                <span class="tooltip-text-2">Total Question of {name}: {total}</span>
                <ToastContainer />
            </div>
        </div>

    );
};

export default Quiz;
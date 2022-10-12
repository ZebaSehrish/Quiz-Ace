import React from 'react';
import { FaceFrownIcon } from '@heroicons/react/24/solid';

const UndefinedRoute = () => {
    return (
        <div className=''>
            <p className='flex justify-center text-violet-300'><FaceFrownIcon className=' w-32 h-32 '></FaceFrownIcon></p>
            <p className='font-bold text-3xl text-violet-500'>Not Found!!</p>
        </div>
    );
};

export default UndefinedRoute;
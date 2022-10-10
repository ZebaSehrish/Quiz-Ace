import React from 'react';

const Blog = () => {
    return (
        <div className='grid grid-cols-3 gap-3 m-20 ' >
            <div className=' rounded-lg bg-blue-100 border-4 border-white text-violet-900 p-5'>
                <h4 className='font-bold text-2xl'>* What is the purpose of react router ? </h4>
                <p className='px-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptas illum error tenetur facilis assumenda ad pariatur soluta, fugit ratione repellendus eum possimus, enim delectus autem! Laboriosam suscipit labore fugiat.</p>
            </div>

            <div className='p-5 rounded-lg bg-blue-100 border-4 border-white  text-violet-900'>
                <h4 className='font-bold text-2xl'>* How does context api work?</h4>
                <p className='px-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptates qui dolorem aliquid dolor consectetur, quae consequatur. Ullam, nesciunt quae voluptate, porro fuga cum iste, qui assumenda minus aliquam unde.</p>
            </div>

            <div className='p-5 rounded-lg bg-blue-100 border-4 border-white text-violet-900'>
                <h4 className='font-bold text-2xl'>* Explain useRef.  </h4>
                <p className='px-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam inventore quos quaerat aliquam nam eligendi hic accusamus natus repellendus quia esse, quo reiciendis deserunt corrupti incidunt consequatur maiores harum quas.</p>
            </div>
        </div>
    );
};

export default Blog;
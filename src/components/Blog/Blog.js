import React from 'react';

const Blog = () => {
    return (
        <div className='sm:grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-3 m-20 mt-40 ' >
            <div className=' rounded-lg bg-blue-100 border-4 border-white text-violet-900 p-5'>
                <h4 className='font-bold text-2xl'>* What is the purpose of react router ? </h4>
                <p className='mt-5 px-10'>React Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route. </p>
            </div>

            <div className='p-5 rounded-lg bg-blue-100 border-4 border-white  text-violet-900'>
                <h4 className='font-bold text-2xl'>* How does context api work?</h4>
                <p className='mt-5 px-10'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. </p>
            </div>

            <div className='p-5 rounded-lg bg-blue-100 border-4 border-white text-violet-900'>
                <h4 className='font-bold text-2xl'>* Explain useRef.  </h4>
                <p className='mt-5 px-10'> Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM.</p>
            </div>
        </div>
    );
};

export default Blog;
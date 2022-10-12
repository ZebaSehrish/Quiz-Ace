import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import "./Home.css";

const Home = () => {
    const quizTopics = useLoaderData();

    return (
        <div className='home'>
            <section className='home-items rounded-lg m-14 sm:grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 '>
                <div className='home-description m-20 pt-32 mr-10 font-medium'>
                    <h1>Organize Live Language Trivia Quiz For Your Event</h1>
                    <p className='mt-5'>There are various programming languages which include such as HTML, CSS, PHP, Java, JavaScript etc. to develop the website. Which is the language you’re most comfortable with? Choose the one and learn web development which has a great future in the coming days. Prove yourself with your knowledge!</p>
                </div>
                <div>
                    <img className='sm:m-10 md:ml-32 lg:m-20 ' src="course_thumbnail_default_5060.jpg" alt="" />
                </div>
            </section>
            <button className=' sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {
                    quizTopics.data.map(quiz => <Quiz
                        key={quiz.id}
                        quiz={quiz}
                    ></Quiz>)
                }
            </button>
        </div>
    );
};

export default Home;
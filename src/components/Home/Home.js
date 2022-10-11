import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import "./Home.css";

const Home = () => {
    const quizTopics = useLoaderData();
    //   console.log(quizTopics.data);
    return (
        <div className='home'>
            {/* <section className='home-items grid grid-cols-2 rounded-lg m-14'>
                <div className='home-description m-20 pt-32 mr-10 font-medium'>
                    <h1>Organize Live Language Trivia Quiz For Your Event</h1>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi incidunt tempore tempora reprehenderit voluptates molestias dolores consectetur vero. Odit, iure! Tempore architecto libero recusandae culpa voluptatibus a qui eveniet exercitationem!
                </div>
                <div>
                    <img className='m-20' src="course_thumbnail_default_5060.jpg" alt="" />
                </div>
            </section> */}
            <div className='grid grid-cols-4'>
                {
                    quizTopics.data.map(quiz => <Quiz
                        key={quiz.id}
                        quiz={quiz}
                    ></Quiz>)
                }
            </div>
        </div>
    );
};

export default Home;
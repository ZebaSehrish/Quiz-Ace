import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestions from '../QuizQuestions/QuizQuestions';

const QuizDetails = () => {
    const quizDetails = useLoaderData();
    //console.log(quizDetails.data);
    const { name } = quizDetails.data;
    return (
        <div>
            <p className='text-2xl text-violet-800 m-5 mt-20 font-bold '>Quiz of {name}</p>
            <div className='sm:m-10 lg:m-20'>
                {
                    quizDetails.data.questions.map(quizQuestions => <QuizQuestions
                        key={quizQuestions.id}
                        quizQuestions={quizQuestions}
                    ></QuizQuestions>)
                }
            </div>

        </div>
    );
};

export default QuizDetails;
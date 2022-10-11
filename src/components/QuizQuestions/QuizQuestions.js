import React from 'react';
import Options from '../Options/Options';

const QuizQuestions = ({ quizQuestions }) => {
    //  console.log(quizQuestions);
    const { question } = quizQuestions;
    return (
        <div>
            <div className='grid grid-cols-1 m-10 p-10 border-4 border-white rounded-lg'>
                Quiz Question: {question}
                <div className='option-container grid grid-cols-2 gap-3 p-10'>
                    {
                        quizQuestions.options.map(option => <Options
                            option={option}></Options>)
                    }
                </div>
            </div>
        </div >
    );
};

export default QuizQuestions;
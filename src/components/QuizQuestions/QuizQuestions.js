import React from 'react';
import Options from '../Options/Options';
import './QuizQuestions.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon } from '@heroicons/react/24/solid';

const QuizQuestions = ({ quizQuestions }) => {
    const { question, correctAnswer } = quizQuestions;

    const handleAlert = (option) => {
        if (option === correctAnswer) {
            toast('Correct Answer');
        }
        else {
            toast('Incorrect Answer');
        }
    }

    const handleEyeIcon = () => {
        toast(correctAnswer);
    }

    return (
        <div>
            <div className='p-20 mb-10 bg-purple-400 border-4 border-white rounded-lg  text-violet-900'>
                <div className='questions'>
                    <p className='text-white font-semibold text-lg pl-20'> Quiz Question: {question}</p>
                    <button onClick={() => handleEyeIcon()} className='eye-icon'><EyeIcon className='w-6 h-6'></EyeIcon><span class="tooltip-text">See the correct answer</span></button>

                </div>

                <div className='option-container font-semibold sm:grid grid-cols-1 lg:grid-cols-2 gap-3 p-10'>
                    {
                        quizQuestions.options.map(option => <Options
                            option={option}
                            handleAlert={handleAlert}
                        ></Options>)
                    }
                </div>
            </div>
        </div >
    );
};

export default QuizQuestions;
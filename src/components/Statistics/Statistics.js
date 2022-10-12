import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const Statistics = () => {
    const statistics = useLoaderData();
    console.log(statistics.data);
    return (
        <div className=' flex justify-center m-20 p-20 bg-white border-4 border-violet-400 rounded-xl '>
            <div>
                <p className=' mb-10 text-violet-900 font-bold text-lg'>Number of Quiz Questions vs Course Chart</p>
                < LineChart className=' text-violet-900 sm:w-96 m-0 lg:m-0' width={600} height={200} data={statistics.data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip></Tooltip>
                    <Line type="monotype" dataKey="total" stroke="#82ca9d" />
                </LineChart>
            </div>


        </div >
    );
};

export default Statistics;
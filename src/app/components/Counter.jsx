'use client'
import React, { useState } from 'react';

const Counter = () => {


    const [count,setCount]=useState(0);
    console.log('counter component render')


    const handleIncrease =()=>{
        console.log('Increase button rendered')
    setCount(count+1);
    
    }


    return (
        <div>
            <h2 className='text-4xl font-bold mb-4'>Counter:{count}</h2>
            <button onClick={handleIncrease}>Render</button>
        </div>
    );
};

export default Counter;
import React, { Component,useState } from 'react';
import '../Counter/Counter.css'

const Counter = ( {count,id} ) => {

    const [value, setValue] = useState(0);
    

    const formatCounter = () => {
        return value === 0 ? 'Zero' : value;
    }
    
    console.log('count',count);
    console.log('id',id);

    return (  
        <>
            <div className="counter_container">
            <h2 className="counter_title">Title {id} </h2>
                <div className="counter_block">
                    <span className="counter_number">{ formatCounter() }</span>
                    <button className="counter_btn" onClick={ () => setValue(value+1) }>Increment</button>
                </div>
            </div>
        </>
    );
}

export default Counter;

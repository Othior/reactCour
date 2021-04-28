import React from 'react';
import './progressBar.css'

function progressBar({bgColor,value}) {
    return (
        <div>
            <h1> {value} % </h1>
            <div className="progress" style={{border:"1px solid grey"}}>
                <div className="bar" style={{ backgroundColor:bgColor , width:`${value}%`}}></div>
            </div>
        </div>
    )
}

export default progressBar

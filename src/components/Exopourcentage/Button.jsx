import React from 'react'

function Button({handleClick,text,bgColor,increment}) {
    return (
        <div>
            <button onClick={() => handleClick(increment) } style={{ backgroundColor:bgColor, color:"white", padding:"1rem" , margin:"1rem", border:"none" }}> +{increment} %</button>
        </div>
    )
}

export default Button

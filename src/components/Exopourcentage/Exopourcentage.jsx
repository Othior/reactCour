import React, { useCallback, useState } from 'react'
import Button from './Button'
import Progressbar from './progressBar'

function ExoPourcentage() {

    const [counterOne, setCounterOne] = useState({ backgroundColor: "#284035" , increment: 25 , value: 0 })
    const [counterTwo, setCounterTwo] = useState({ backgroundColor: "#D9564A" , increment: 20 , value: 0 })

    const incrementCounterOne = useCallback((val) => {
        counterOne.value < 100 && setCounterOne({...counterOne,value: counterOne.value + val})
    },[counterOne])

    const incrementCounterTwo = useCallback((val) => {
        counterTwo.value < 100 && setCounterTwo({...counterTwo,value: counterTwo.value + val})
    },[counterTwo])
    
    

    return (
        <div>
            <Progressbar bgColor={counterOne.backgroundColor} value={counterOne.value} />
            <Progressbar bgColor={counterTwo.backgroundColor} value={counterTwo.value} />

            <Button handleClick={ incrementCounterOne } bgColor={counterOne.backgroundColor} increment={counterOne.increment} text="count 1" />
            <Button handleClick={ incrementCounterTwo} bgColor={counterTwo.backgroundColor} increment={counterTwo.increment} text="count 2" />
        </div>
    )
}

export default ExoPourcentage

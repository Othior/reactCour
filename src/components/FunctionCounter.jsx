import React,{useState,useEffect} from 'react'

function FunctionCounter() {

    const [counter, setCounter] = useState(0);
    const [name, setName] = useState("")

    useEffect(()=>{
        console.log("Mise a jour du titre via UseEffect");
        document.title = `Vous avez cliqué ${counter} fois`;
    },[counter])

    return (
        <div>
            <h1>{counter}</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value) } />
            <button onClick={ ()=> setCounter(counter+1) }>Cliquer</button>
        </div>
    )
}

export default FunctionCounter

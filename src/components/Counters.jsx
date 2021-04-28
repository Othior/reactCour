import React, { Component,useState } from 'react'
import Counter from './Counter/Counter';

const Counters = () => {

    const [counter, setcounter] = useState([ { id:1,value:0 }, { id:2,value:0 }, { id:3,value:0 }, { id:4,value:0 } ]);

    return ( 
        <div>
            { counter.map(count => 
                <Counter key={count.id} value={count.value} id={count.id} />) 
            }
        </div>
     );
}
 
export default Counters;
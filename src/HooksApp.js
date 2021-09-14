import React, { useState } from 'react';
import Speaks from './Components/Speaks';
import useCounter from './hooks/useCounter';

const HooksApp= ()=>{
    const {count, increment}=useCounter(1);
    const [ver, setVer] = useState(true);
    return <>
        <h1>Hooks</h1>
        <hr/>
        {ver&&<Speaks count={count}/>}
        <button onClick={increment} className='btn btn-primary'>+</button>
        <button onClick={()=>setVer(!ver)}>ver</button>
    </>;
};
export default HooksApp;
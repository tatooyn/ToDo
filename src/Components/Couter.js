import React from 'react';
import useCounter from '../hooks/useCounter';
const Counter= ()=>{
    const {count,increment,decrement}=useCounter(20);
  
    return <>
        <h1>{count}</h1>
        <button onClick={increment}
            className='btn btn-primary'>+1</button>
        <button onClick={decrement}
            className='btn btn-primary'>-1</button>
    </>;
};
export default Counter;
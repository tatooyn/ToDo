import React, { useRef } from 'react';
import useForm from '../hooks/useForm';
const Forms= ()=>{
    const inputName=useRef();
    const select=()=>{
        inputName.current.select();
    };

    const [values,setContent]=useForm({
        name:'',
        email:''
    });
    return <>
    <form>
        <h1>Form</h1>
        <div className='form-group'>
            <label></label>
            <input 
                ref={inputName}
                name='name'
                value={values.name}
                onChange={e=>setContent(e.target)}
                className='form-control'/>
            <input 
                name='email'
                type='email'
                value={values.email}
                onChange={e=>setContent(e.target)}
                className='form-control'/>
            <button onClick={select} className='btn btn-primary'></button>
        </div>
    </form>
    </>;
};
export default Forms;
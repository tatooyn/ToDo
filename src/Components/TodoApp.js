import React,{useEffect, useReducer, useState} from 'react';
import MyAppDesc from './MyAppDesc';
import { todoReducer } from './todoReducer';


const initialState=[{
    id:new Date().getTime(),
    desc:'Aprender React',
    done:false
}];
const init=()=>{
    return JSON.parse(
            localStorage.getItem('toDos') 
        )
        || initialState
};
const TodoApp= ()=>{
    const [todos, dispatch] = useReducer(todoReducer, [],init);
    const [desc, setDesc] = useState('');

    useEffect(() => {
        localStorage.setItem('toDos',JSON.stringify(todos));
    }, [todos]);

    const onSubmit=(e)=>{
        e.preventDefault();
        if(desc.trim().length<=1){
            return;
        }
        const newToDO={
            id: new Date().getTime(),
            desc,
            done:false
        };
        const action={
            type:'add',
            payload:newToDO
        };
        dispatch(action);
        setDesc(()=>'');
        console.log('agregar',todos);
    };
    const onDelete=(id)=>{
        console.log('delete',id);
        const action={
            type:'delete',
            payload:id
        }
        dispatch(action);
    };
    const onToggle=(id)=>{
        console.log('togggle',id);
        const action={
            type:'toggle',
            payload:id
        }
        dispatch(action);
    };
    const form=
        <form onSubmit={onSubmit}>
            <div className='form-group'>
                <label htmlFor='description'>New Todo</label>
                <input 
                    name='description'
                    value={desc}
                    placeholder='ToDo'
                    onChange={(e)=>setDesc(e.target.value)}
                    className='form-control'/>
            </div>
            <button className='btn btn-primary'>Add</button>
        </form>;
    const list=todos.map(todo=>
        <li key={todo.id} className='d-flex justify-content-between'>
            <p className={`${todo.done&&'maked'} manita`} onClick={()=>onToggle(todo.id)}>{todo.desc}</p>
            <button className='btn btn-secondary'
            onClick={()=>onDelete(todo.id)}>Delete</button>
        </li>
    );

    return <div>
        <h1>ToDo App ({todos.length})</h1>
        <hr/>
        {form}
        <ul className='list-group list-group-flush'>
            {list}
        </ul>
        <hr/>
        <MyAppDesc/>
    </div>;
};
export default TodoApp;
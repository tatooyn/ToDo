import React,{useState} from 'react';
const MyAppDesc= ()=>{
    
    return <div className='MyAppDesc'>
        <p>Aplicación desarrollada con React, por Andrés Cardona Alvarez</p>
        <p>Del curso "React: De cero a experto ( Hooks y MERN ); de Udemy"</p>
        <p>GitHub: <a href='https://github.com/tatooyn/react-gifts.git'>https://github.com/tatooyn/react-gifts.git</a> </p>
        <h4>Temas:</h4>
        <ul>
            <li>useReducer</li>
            <li>localStorage</li>
        </ul>
    </div>;
};
export default MyAppDesc;
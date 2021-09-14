const initialState=[{
    id:1,
    todo:'Comprar Pan',
    done:false
}];
const todoReducer=(state=initialState,action)=>{
    return state;
};

const action={

}

let todos=todoReducer();
console.log(todos);
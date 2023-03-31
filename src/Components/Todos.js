import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchTodos from '../redux/Todos/thunk/fetchTodos';

const Todos = () => {
    const dispatch = useDispatch()
    const todos = useSelector((state)=>state.todos)
    console.log("todos", todos)
    useEffect(()=>{
        dispatch(fetchTodos)
    }, [dispatch])
    return (
        <div>
            {
                todos?.length
            }
        </div>
    );
};

export default Todos;
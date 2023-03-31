import {loaded} from "../Action"
const fetchTodos = async(dispatch, getState)=>{
    const response  = await fetch ("https://jsonplaceholder.typicode.com/users");
    const todos = await response.json();
    dispatch(loaded(todos))
}
export default fetchTodos;
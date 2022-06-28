import { useTodos } from '../../hooks/useTodos';
import Todo from '../Todo/Todo';
import '../../index.scss'


const TodoList = () => {
    const [todos] = useTodos();
    return (
        <div className='container d-flex'>
            <div className='box'>
                <h2>In progress</h2>
                {todos.map((todo) => (
                    !todo.completed && <Todo key={todo.id} todo={todo} /> 
                ))}
            </div>
            <div className='box'>
                <h2>Completed</h2>
                {todos.map((todo) => (
                    todo.completed && <Todo key={todo.id} todo={todo} /> 
                ))}
            </div>
        </div>
    );
}

export default TodoList;

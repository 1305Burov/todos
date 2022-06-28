import {useTodos} from '../../hooks/useTodos';
import './Todo.scss';

export default function Todo({ todo }) {
    const [, setTodos] = useTodos();
  
    const completedClassName = todo.completed ? 'completed todo__box' : 'todo__box';
    function completeTodo() {
      setTodos((prevTodos) => {
        const todoIdx = prevTodos.findIndex((t) => t.id === todo.id);
        prevTodos[todoIdx].completed = true;
        return [...prevTodos];
      });
    }
    function deleteTodo() {
      setTodos((prevTodos) => {
        return [...prevTodos.filter((t) => t.id !== todo.id)];
      });
    }
    return (
      <div className={completedClassName}>
        <h3>{todo.title}</h3>
        {!todo.completed && <button className="button button__complete" onClick={completeTodo}>&#10004;</button>}
        {todo.completed && <button className="button button__delete" onClick={deleteTodo}>{'\u2715'}</button>}
      </div>
    );
}


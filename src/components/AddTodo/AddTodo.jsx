import { useTodos } from '../../hooks/useTodos';
import './AddTodo.scss';

export default function AddTodo() {
  const [, setTodos] = useTodos();

  function createTodo(event) {
    event.preventDefault();
    const newTodo = {
      id: Date.now(),
      completed: false,
      title: event.target.title.value.trim(),
    };
    console.log(newTodo);
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    event.target.reset();
  }
  return (
    <form className="create__form" onSubmit={createTodo}>
      <input className="create__input" type="text" name="title" placeholder="Enter todo title" required />
      <button className="button create__button" type="submit">&#43;</button>
    </form>
  );
}

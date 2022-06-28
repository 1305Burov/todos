import TodosProvider from './context/todosContext';
import TodoList from './components/TodoList/TodoList';
import AddTodo from './components/AddTodo/AddTodo';


function App() {

  return (
     <TodosProvider>
        <AddTodo />
        <TodoList />
     </TodosProvider>
  );
}

export default App;

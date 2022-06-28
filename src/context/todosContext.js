import { createContext, useState } from 'react';

export const TodosContext = createContext();

const someTodo = [
    {
        id: 1, 
        completed: false,
        title: 'I\'ll do...'
    },
    {
        id: 2, 
        completed: false,
        title: 'I\'m going to do...'
    },
    {
        id: 3, 
        completed: true,
        title: 'I had to do...'
    },
];

export default function TodosProvider ({ children }) {
    const [todos, setTodos] = useState(someTodo);

    return (
        <TodosContext.Provider value={[todos, setTodos]}>
            {children}
        </TodosContext.Provider>
    );
} 
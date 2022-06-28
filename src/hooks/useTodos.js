import { useContext } from "react";
import { TodosContext } from "../context/todosContext";

export function useTodos() {
    return useContext(TodosContext);
}
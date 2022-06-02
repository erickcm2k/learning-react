import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import axios from "axios";

import { TodoProps } from "./TodoProps";

const TodosContainer = () => {
  const [todos, setTodos] = useState<TodoProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getTodos = async () => {
    setIsLoading(true);
    const todos = await axios.get("http://localhost:3001/get");
    setTodos(todos.data.data);
    setIsLoading(false);
  };
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      {todos.length === 0 ? (
        <h1>No hay todos</h1>
      ) : (
        <>
          {todos.map((todo) => (
            <Todo key={todo.id} {...todo} getTodos={getTodos} todos={todos} setTodos={setTodos}/>
          ))}
        </>
      )}
    </>
  );
};

export default TodosContainer;

import React, { useState, useRef, useEffect } from "react";
import { Input, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Checkbox from "@mui/material/Checkbox";
import { Dialog, FormControl, FormLabel } from "@mui/material";

import axios from "axios";

import { TodoProps } from "./TodoProps";
import TodosContainer from "./TodosContainer";

interface TodoProps2 {
  id: string;
  title: string;
  content: string;
  dueDate: string;
  completed: number;
  getTodos: Function;
  todos: TodoProps[];
  setTodos: Function;
}

const Todo = (props: TodoProps2) => {
  const initialState = { ...props };
  const [form, setForm] = useState(initialState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const prevProps = useRef<TodoProps2>();
  useEffect(() => {
    prevProps.current = form;
  }, [form]);

  const onBlur = async () => {
    await axios.put("http://localhost:3001/update", {
      id: form.id,
      title: form.title,
      content: form.content,
      dueDate: form.dueDate,
      completed: form.completed,
    });
    updateTodos();
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = async () => setOpen(false);

  const newChecked = Boolean(props.completed);

  const updateTodos = () => {
    props.todos.forEach((todo, index, todosArray) => {
      if (todo.id === props.id) {
        const newTodos = [...todosArray];
        const { title, content, dueDate, completed } = form;

        const todo = {
          ...props,
          title,
          content,
          dueDate,
          completed,
        };
        newTodos[index] = todo;
        props.setTodos(newTodos);
      }
    });
  };

  const updateCompleted = () => {
    props.todos.forEach((todo, index, todosArray) => {
      if (todo.id === props.id) {
        const newTodos = [...todosArray];
        const { title, content, dueDate, completed } = form;

        const todo = {
          ...props,
          title,
          content,
          dueDate,
          completed: props.completed === 0 ? 1 : 0,
        };
        newTodos[index] = todo;
        props.setTodos(newTodos);
      }
    });
  };

  const toggleCompletion = async () => {
    await axios.put("http://localhost:3001/setcompleted", {
      id: props.id,
      flag: props.completed === 0 ? 1 : 0,
    });
    updateCompleted();
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        height: "100%",
        backgroundColor: "primary.main",
      }}
    >
      <Dialog open={open} onClose={handleClose}>
        <Box sx={{ padding: "0.8rem" }}>
          <FormControl>
            <Input
              type="text"
              name="title"
              value={form.title}
              onChange={onChange}
              onBlur={onBlur}
            ></Input>
            <Input
              type="text"
              name="content"
              value={form.content}
              onChange={onChange}
              onBlur={onBlur}
            ></Input>
          </FormControl>
        </Box>
      </Dialog>
      <Typography onClick={handleOpen}>{props.title}</Typography>
      <Typography onClick={handleOpen}>{props.content}</Typography>

      <Checkbox checked={newChecked} onChange={toggleCompletion} />
    </Box>
  );
};

export default Todo;

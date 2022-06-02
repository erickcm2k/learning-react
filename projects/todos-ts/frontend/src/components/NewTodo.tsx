import React, { useState } from "react";
import { Input, FormControl, FormLabel } from "@mui/material";
import axios from "axios";
import { TodoProps } from "./TodoProps";

const NewTodo = () => {
  const initialState: TodoProps = {
    id: "",
    title: "",
    content: "",
    dueDate: "",
    completed: 0,
  };

  const [form, setForm] = useState<TodoProps>(initialState);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const addTodo = async () => {
    await axios.post("http://localhost:3001/add", {
      id: form.id,
      title: form.title,
      content: form.content,
      dueDate: form.dueDate,
    });
    
  };

  return (
    <FormControl>
      <Input
        type="text"
        name="title"
        value={form.title}
        onChange={onChange}
      ></Input>
      <Input
        type="text"
        name="content"
        value={form.content}
        onChange={onChange}
      ></Input>
    </FormControl>
  );
};

export default NewTodo;

import React, { useState } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Checkbox from "@mui/material/Checkbox";
import { Dialog } from "@mui/material";

import axios from "axios";

interface TodoProps {
  id: string;
  title: string;
  content: string;
  dueDate: string;
  completed: number;
  getTodos: Function;
}

const Todo = (props: TodoProps) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const newChecked = Boolean(props.completed);

  const toggleCompletion = async () => {
    const resp = await axios.put("http://localhost:3001/setcompleted", {
      id: props.id,
      flag: props.completed === 0 ? 1 : 0,
    });
    console.log(resp);
    props.getTodos();
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {props.title}
          </Typography>
          <hr></hr>
          <Typography
            id="modal-modal-content"

            sx={{ mt: 2 }}
          >
            {props.content}
          </Typography>
        </Box>
      </Dialog>
      <Typography onClick={handleOpen}>{props.title}</Typography>

      <Checkbox checked={newChecked} onChange={toggleCompletion} />
    </Box>
  );
};

export default Todo;

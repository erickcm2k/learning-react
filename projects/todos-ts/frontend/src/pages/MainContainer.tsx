import React, { useState } from "react";
import { Container, Box, Button, Dialog } from "@mui/material";
import Typography from "@mui/material/Typography";
import TodosContainer from "../components/TodosContainer";
import NewTodo from "../components/NewTodo";

const MainContainer = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = async () => setOpen(false);

  return (
    <Container>
      <Box
        sx={{
          width: "100%",
          maxWidth: 500,
          margin: "0 auto",
        }}
      >
        <Typography variant="h3" component="div" align="center" gutterBottom>
          Todos
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          maxWidth: 500,
          margin: "0 auto",
          marginTop: "1rem",
        }}
      >
        <Button variant="contained" onClick={handleOpen}>
          New todo
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <Box sx={{ padding: "0.8rem" }}>
            <NewTodo />
          </Box>
        </Dialog>
      </Box>
      <Box
        sx={{
          width: "100%",
          maxWidth: 500,
          margin: "0 auto",
          marginTop: "1rem",
        }}
      >
        <TodosContainer></TodosContainer>
      </Box>
    </Container>
  );
};

export default MainContainer;

import React from "react";
import { Container, Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import TodosContainer from "../components/TodosContainer";

const MainContainer = () => {
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
        <Button variant="contained">New todo</Button>
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

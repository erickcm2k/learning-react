import React from "react";
import { Container, Box, Button } from "@mui/material";

const MainContainer = () => {
  return (
    <Container>
      <Box>
        <Button variant="contained">New todo</Button>
      </Box>
      <Box>
        <Button variant="contained"></Button>
      </Box>
    </Container>
  );
};

export default MainContainer;

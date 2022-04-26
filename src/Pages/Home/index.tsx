import { Box } from "@chakra-ui/react";
import React from "react";
import { Header, Section } from "./Components";
import "./styles.scss";

export const Home: React.FC = () => {
  return (
    <Box className="home">
      <Header />
      <Section />
    </Box>
  );
};

import { Box, Button, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React from "react";
import "./styles.scss";

export const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-slate-700 h-16">
      <Box className="image">
        <Image width={100} src="/Images/logo.png" />
      </Box>
      <Box className="buttons">
        <Button
          colorScheme="teal"
          className="mx-2"
          variant="outline"
          onClick={() => {
            navigate("/login");
          }}
        >
          Sign-in
        </Button>
        <Button
          colorScheme="teal"
          className="mx-2"
          variant="solid"
          onClick={() => {
            navigate("/register");
          }}
        >
          Sign-up
        </Button>
      </Box>
    </header>
  );
};

import { Box, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../Components";
import React from "react";
import "./styles.scss";

export const Header: React.FC = () => {
  const navigate = useNavigate();

  const buttonProps = [
    {
      label: "Sign-in",
      variant: "outline",
      login: true,
    },
    {
      label: "Sign-up",
      variant: "solid",
      login: false,
    },
  ];

  const redirect =
    (isLogin = false) =>
    () => {
      if (isLogin) return navigate("/login");
      return navigate("/register");
    };

  return (
    <header className="h-16">
      <Box className="image age">
        <Image width={100} src="/Images/logo.png" />
      </Box>
      <Box className="buttons">
        {buttonProps.map((info, idx) => (
          <Button
            label={info.label}
            onClick={redirect(info.login ? true : false)}
            variant={info.variant}
            key={idx}
            colorScheme="blue"
            className="mx-2"
          />
        ))}
      </Box>
    </header>
  );
};

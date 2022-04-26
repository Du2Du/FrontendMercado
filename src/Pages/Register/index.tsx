import {
  Box,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Button } from "../../Components";
import { Backend } from "../../Services/api";
import { ApiRoutes } from "./ApiRoutes";
import "./styles.scss";

export const Register: React.FC = () => {
  const [show, setShow] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  const showPassword = () => {
    setShow((past) => !past);
  };

  const userRegister = () => {
    setShowSpinner(true);
    Backend.post(ApiRoutes.USERS, {})
      .then(() => {})
      .catch()
      .finally(() => {
        setShowSpinner(false);
      });
  };

  return (
    <Box className="box-register">
      <main className="rounded-xl">
        <Heading className="title">Subscribe Now!</Heading>
        <form onSubmit={userRegister}>
          <div>
            <label>Name:</label>
            <Input placeholder="Name" type="text" />
          </div>
          <div>
            <label>E-mail:</label>
            <Input placeholder="E-mail" type="email" />
          </div>
          <div>
            <label>Password:</label>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
              />
              <InputRightElement
                className="hide-button"
                width={show ? "4.3rem" : "4.8rem"}
              >
                <Button
                  color="gray"
                  variant="solid"
                  onClick={showPassword}
                  label={show ? "Hide" : "Show"}
                />
              </InputRightElement>
            </InputGroup>
          </div>
          <Button colorScheme="teal" variant="solid" type="submit">
            {showSpinner ? <Spinner /> : "Register"}
          </Button>
        </form>
      </main>
    </Box>
  );
};

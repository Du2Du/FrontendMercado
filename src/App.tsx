import { Box, ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { RoutesPage } from "./Routes";
import { Toaster } from "react-hot-toast";
import "./styles.css";
import { RoutesHomeStyle } from "./Routes/styles";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Toaster toastOptions={{ position: "top-right" }} />
      <BrowserRouter>
        <RoutesHomeStyle>
          <RoutesPage />
        </RoutesHomeStyle>
      </BrowserRouter>
    </Box>
  </ChakraProvider>
);

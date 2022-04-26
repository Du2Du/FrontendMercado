import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import "./styles.scss";

export const Section: React.FC = () => {
  return (
    <section>
      <Box className="bg-white card-section rounded-xl">
        <p className="text-black">Come now and buy/sell in Zé's market</p>
      </Box>
    </section>
  );
};

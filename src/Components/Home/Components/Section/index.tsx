import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import "./styles.scss";

export const Section: React.FC = () => {
  return (
    <section>
      <Box className="bg-slate-700 w-80 card-section rounded-xl border-gray-600	">
        <p className="text-gray-800 text-white">
          Come now and buy/sell in Zé's market
        </p>
      </Box>
    </section>
  );
};

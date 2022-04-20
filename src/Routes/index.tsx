import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Components";

export const RoutesPage: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

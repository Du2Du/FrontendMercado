import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Login, Register } from "../Pages";
import { RoutesHomeStyle } from "./styles";

export const RoutesPage: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

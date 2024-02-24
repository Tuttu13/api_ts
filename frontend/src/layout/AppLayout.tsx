import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const AppLayout: React.FC = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Outlet />
    </Box>
  );
};

export default AppLayout;

import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import StarIcon from "@mui/icons-material/Star";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const listItems = [
    {
      text: "Todos",
      icon: <FormatListBulletedIcon />,
      to: "/",
    },
    {
      text: "Important",
      icon: <StarIcon />,
      to: "/important",
    },
    {
      text: "All",
      icon: <AllInclusiveIcon />,
      to: "/all",
    },
    {
      text: "Complited",
      icon: <TaskAltIcon />,
      to: "complited",
    },
  ];

  const handleItemClick = (to: string) => {
    navigate(to);
  };

  return (
    <Box
      component="nav"
      sx={{
        width: { sm: "280px" },
        height: "100vh",
        borderRight: 1,
        borderColor: "divider",
        bgcolor: "secondary.main",
        color: "secondary.contrastText",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Toolbar variant="regular" sx={{ fontSize: "22px" }}>
          ToDo App
        </Toolbar>
        <Divider />
        <List>
          {listItems.map((item, index) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton onClick={() => handleItemClick(item.to)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>
    </Box>
  );
};

export default Sidebar;

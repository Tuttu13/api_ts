import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import StarIcon from "@mui/icons-material/Star";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { Box, Checkbox, Typography } from "@mui/material";
import React from "react";
import { updateTodo } from "./api/api";
import { TodoState } from "./types";

interface TodoListProps {
  todos: TodoState[];
  setTodos: React.Dispatch<React.SetStateAction<TodoState[]>>;
  filterFunction: (todo: TodoState) => boolean;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  const fileteredTodos = props.todos.filter(props.filterFunction);

  const handleCheckDone = async (todo: TodoState) => {
    const updateData = { ...todo, done: !todo.done };
    await updateTodo(todo.id, updateData);

    props.setTodos(props.todos.map((t) => (t.id === todo.id ? updateData : t)));
  };

  const handleCheckImportant = async (todo: TodoState) => {
    const updateData = { ...todo, important: !todo.important };
    await updateTodo(todo.id, updateData);

    props.setTodos(props.todos.map((t) => (t.id === todo.id ? updateData : t)));
  };

  return (
    <Box
      sx={{
        p: 3,
        flexGrow: 1,
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box>
        <Typography fontSize={22} align="left" pb={2}>
          Tasks
        </Typography>
        <Box sx={{ overflowY: "auto", maxHeight: "75vh" }}>
          {fileteredTodos.map((todo, index) => (
            <Box
              key={todo.id}
              sx={{
                mb: 1,
                cursor: "pointer",
                bgcolor: "secondary.main",
                color: "secondary.contrastText",
                "&:hover": {
                  bgcolor: "secondary.light",
                },
              }}
            >
              <Box
                key={index}
                sx={{
                  display: "flex",
                  p: 2,
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Checkbox
                    icon={<CircleOutlinedIcon />}
                    checkedIcon={<CheckCircleOutlinedIcon />}
                    checked={todo.done}
                    onChange={() => handleCheckDone(todo)}
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                      e.stopPropagation()
                    }
                  />
                  <Box
                    sx={{
                      pl: 2,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <Box>{todo.title}</Box>
                    <Box>{todo.date}</Box>
                  </Box>
                </Box>
                <Checkbox
                  icon={<StarBorderOutlinedIcon />}
                  checkedIcon={<StarIcon />}
                  checked={todo.important}
                  onChange={() => handleCheckImportant(todo)}
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                    e.stopPropagation()
                  }
                />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default TodoList;

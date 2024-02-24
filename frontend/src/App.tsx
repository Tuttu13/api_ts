import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import AppLayout from "./layout/AppLayout";
import { createTheme } from "./theme";
import TodoList from "./todo/TodoList";
import TodoEdit from "./todo/components/TodoEdit";
import { BackgroundLocation } from "./todo/hooks/useModalRoute";
import { useTodos } from "./todo/hooks/useTodos";

function App() {
  const theme = createTheme();
  const { todos, setTodos } = useTodos();
  const location = useLocation();
  const background = (location.state as BackgroundLocation)?.background;

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes location={background || location}>
          <Route path="/" element={<AppLayout />}>
            <Route
              index
              element={
                <TodoList
                  todos={todos}
                  setTodos={setTodos}
                  filterFunction={(todo) => !todo.done}
                />
              }
            />
            <Route
              path="/important"
              element={
                <TodoList
                  todos={todos}
                  setTodos={setTodos}
                  filterFunction={(todo) => todo.important}
                />
              }
            />
            <Route
              path="/all"
              element={
                <TodoList
                  todos={todos}
                  setTodos={setTodos}
                  filterFunction={() => true}
                />
              }
            />
            <Route
              path="/complited"
              element={
                <TodoList
                  todos={todos}
                  setTodos={setTodos}
                  filterFunction={(todo) => todo.done}
                />
              }
            />
            <Route
              path="/todos/:id"
              element={
                <TodoList
                  todos={todos}
                  setTodos={setTodos}
                  filterFunction={(todo) => !todo.done}
                />
              }
            />
          </Route>
        </Routes>
        {background && (
          <Routes>
            <Route
              path="/todos/:id"
              element={<TodoEdit todos={todos} setTodos={setTodos} />}
            />
          </Routes>
        )}
      </ThemeProvider>
    </div>
  );
}

export default App;

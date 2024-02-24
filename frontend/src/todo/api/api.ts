import { TodoState } from "../types";

// すべて対応のtodoを取得
export const getAllTodos = async (): Promise<TodoState[]> => {
  const res = await fetch(`http://localhost:3001/todos`);
  const todos = res.json();
  return todos;
};

// idに紐づいたtodoを取得
export const getTodoById = async (id: string): Promise<TodoState> => {
  const res = await fetch(`http://localhost:3001/todos/${id}`);
  const todo = await res.json();
  return todo;
};

// todoを追加
export const addTodo = async (todo: TodoState): Promise<TodoState> => {
  const res = await fetch(`http://localhost:3001/todos`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const newTodo = res.json();
  return newTodo;
};

// todoを修正
export const updateTodo = async (id: string, todo: TodoState) => {
  await fetch(`http://localhost:3001/todos/${id}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
};

// todoを削除
export const deleteTodo = async (id: string) => {
  await fetch(`http://localhost:3001/todos/${id}`, {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

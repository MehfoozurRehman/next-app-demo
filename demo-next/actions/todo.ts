"use server";

import { revalidatePath } from "next/cache";

const todos = [
  {
    id: 1,
    text: "Buy milk",
    completed: false,
  },
  {
    id: 2,
    text: "Buy eggs",
    completed: true,
  },
  {
    id: 3,
    text: "Buy bread",
    completed: false,
  },
];

export async function getTodos() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return todos;
}

export async function addTodo(
  previousState: {
    todoError: string | null;
  },
  data: FormData
) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const value = data.get("name") as string | null;

  if (!value || typeof value !== "string" || value.trim().length === 0) {
    return {
      todoError: "Please enter a todo",
    };
  }

  todos.push({
    id: todos.length + 1,
    text: value,
    completed: false,
  });

  revalidatePath("/");

  return {
    todoError: null,
  };
}

export async function toggleTodo(formData: { id: number }) {
  console.log("toggleTodo", formData);
  const todo = todos.find((todo) => todo.id === formData.id);

  if (todo) {
    todo.completed = !todo.completed;
    await new Promise((resolve) => setTimeout(resolve, 1000));
    revalidatePath("/");
  }

  return revalidatePath("/");
}

"use client";

import { addTodo } from "@/actions/todo";
import { useActionState } from "react";

export function TodoForm({}) {
  const [state, dispatch, isPending] = useActionState(addTodo, {
    todoError: null,
  });

  return (
    <form action={dispatch}>
      <input type="text" name="name" />
      <button disabled={isPending} type="submit">
        {isPending ? "Adding..." : "Add"}
      </button>
      {state.todoError && (
        <span style={{ color: "red" }}>{state.todoError}</span>
      )}
    </form>
  );
}

"use client";

import { toggleTodo } from "@/actions/todo";
import { useTransition } from "react";

export function TodoEntryEditButton({
  todo,
}: {
  todo: {
    id: number;
    completed: boolean;
  };
}) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      disabled={isPending}
      onClick={() => startTransition(() => toggleTodo({ id: todo.id }))}
    >
      {isPending ? "Toggling..." : todo.completed ? "Uncompleted" : "Complete"}
    </button>
  );
}

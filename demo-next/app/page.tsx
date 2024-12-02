import { getTodos } from "@/actions/todo";
import { TodoForm } from "./TodoForm";
import { TodoEntryEditButton } from "./TodoEntryEditButton";

export default async function Page() {
  const todos = await getTodos();

  return (
    <div>
      <h1>Todo list</h1>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
            <TodoEntryEditButton todo={todo} />
          </li>
        ))}
      </ul>
      <TodoForm />
    </div>
  );
}

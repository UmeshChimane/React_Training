import type { Todo } from "../types/todo";
import TodoList from "../components/TodoList";

type Props = {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

function ActiveTodos({
  todos,
  onToggle,
  onDelete,
}: Props) {
  const activeTodos = todos.filter(
    (todo) => !todo.completed
  );

  return (
    <TodoList
      todos={activeTodos}
      onToggle={onToggle}
      onDelete={onDelete}
    />
  );
}

export default ActiveTodos;
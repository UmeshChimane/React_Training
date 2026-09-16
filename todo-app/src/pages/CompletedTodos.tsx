import type { Todo } from "../types/todo";
import TodoList from "../components/TodoList";

type Props = {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

function CompletedTodos({
  todos,
  onToggle,
  onDelete,
}: Props) {
  const completedTodos = todos.filter(
    (todo) => todo.completed
  );

  return (
    <TodoList
      todos={completedTodos}
      onToggle={onToggle}
      onDelete={onDelete}
    />
  );
}

export default CompletedTodos;
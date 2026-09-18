import type { Todo } from "../types/todo";
import TodoList from "../components/TodoList";

type Props = {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

function AllTodos({
  todos,
  onToggle,
  onDelete,
}: Props) {
  return (
    <TodoList
      todos={todos}
      onToggle={onToggle}
      onDelete={onDelete}
    />
  );
}

export default AllTodos;
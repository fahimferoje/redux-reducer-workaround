import { createContext, useReducer } from "react";
import { taskReducer } from "./taskReducer";

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  return (
    <TasksContext value={tasks}>
      <TasksDispatchContext value={dispatch}>{children}</TasksDispatchContext>
    </TasksContext>
  );
};

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];

export default TaskProvider;

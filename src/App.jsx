import { useReducer } from "react";
import AddTask from "./AddTask.jsx";
import TaskList from "./TaskList.jsx";
import { taskReducer } from "./taskReducer.js";
import TaskProvider, {
  TasksContext,
  TasksDispatchContext,
} from "./TaskProvider.jsx";

export default function TaskApp() {
  return (
    <TaskProvider>
      <h1>Prague itinerary</h1>
      <AddTask />
      <TaskList />
    </TaskProvider>
  );
}

import { useContext, useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { TodoContext } from "../data/TodoContext";

export default function Todos() {
  const { tasks, removeTask, setTasks } = useContext(TodoContext);
  const currTime = new Date().toLocaleTimeString();

  function toggleClick(task) {
    const updatedTask = tasks.map(function (list) {
      if (list.id === task.id) {
        list.clicked = !list.clicked;
        if (list.clicked) {
          list.update = currTime;
        } else {
          list.update = "";
        }
        return list;
      } else {
        return list;
      }
    });
    setTasks(updatedTask);
  }

  return (
    <div className="longListContainer">
      <ul className="longList">
        {tasks.map((task) => (
          <Todo
            key={tasks.id}
            id={tasks.id}
            task={task}
            remove={removeTask}
            toggleClick={toggleClick}
          />
        ))}
      </ul>
      {/* <TodoForm addTask={addTask} /> */}
    </div>
  );
}

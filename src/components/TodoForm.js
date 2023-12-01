import { useContext, useState } from "react";
import { nanoid } from "nanoid";
import { TodoContext } from "../data/TodoContext";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function TodoForm() {
  const { tasks, addTask, removeTask, updateTask, setEditing, editing } =
    useContext(TodoContext);

  const currTime = new Date().toLocaleTimeString();

  let initialData = {
    title: "",
    start: currTime,
    update: "",
  };

  if (editing !== "new") {
    initialData = tasks.find(function (p) {
      return p.id === editing;
    });
  }

  const [task, setTask] = useState(initialData);

  function handleSubmit(e) {
    //add somg to playlist
    e.preventDefault();
    // const newTask = {
    //   title: title,
    //   clicked: false,
    //   id: nanoid()
    // };
    // addTask(newTask);
    // setTitle("");

    if (editing === "new") {
      addTask({ ...task, id: nanoid() });
    } else {
      updateTask(task);
    }
  }

  // function handleTitleChange(e) {
  //   setTitle(e.target.value);
  //   console.log(title);
  // }
  function handleTitleChange(e, field) {
    setTask({ ...task, [field]: e.target.value });
    console.log(task);
  }

  return (
    <div className="todoForm">
      <form onSubmit={handleSubmit}>
        <label>
          <TextField
            type="text"
            onChange={(e) => handleTitleChange(e, "title")}
            value={task.title}
            placeholder="New Task Title"
            variant="filled"
            className="input"
            sx={{ m: 1, width: "30ch" }}
          />
        </label>
        <Button variant="contained" type="submit" sx={{ m: 1, height: "7ch" }}>
          ADD NEW TASK
        </Button>
      </form>
    </div>
  );
}

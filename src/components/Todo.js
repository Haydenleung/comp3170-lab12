import deleteImg from "../icons/clear.png";
import editImg from "../icons/edit.png";
import { TodoContext } from "../data/TodoContext";
import { useContext } from "react";
import Edit from "@mui/icons-material/Edit";
import Clear from "@mui/icons-material/Clear";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";

export default function Todo(props) {
  const { setEditing } = useContext(TodoContext);
  const task = props.task;

  function handleDelete() {
    props.remove(task);
  }

  function handleEdit() {}

  function handleStatusChange() {
    props.toggleClick(task);
  }

  return (
    <div className="singleTask">
      <div className="todoDetails">
        <Checkbox
          type="checkbox"
          onChange={handleStatusChange}
          value={task.clicked}
        />
        {/* <span className="title">{task.title}</span> */}
        <span className="title">
          {task.clicked === true ? <del>{task.title}</del> : task.title}
        </span>
      </div>
      <div className="timeContainer">
        <div className="time">Started at: {task.start}</div>
        {task.update && <div className="time">Completed at: {task.update}</div>}
      </div>
      <div className="icon">
        <div onClick={() => setEditing(task.id)} className="editDetails">
          <Grid item xs={4}>
            <Edit className="edit" />
          </Grid>
        </div>
        <div onClick={handleDelete} className="deleteDetails">
          <Grid item xs={4}>
            <Clear className="delete" />
          </Grid>
        </div>
      </div>
    </div>
  );
}

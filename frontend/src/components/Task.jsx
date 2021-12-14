import { getTask } from "../Actions/TimeTrackerActions";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Task = () => {
  const dispatch = useDispatch();
  const task = useSelector((state) => state.timetracker.CurrentTask);

  const url = useLocation();

  useEffect(() => {
    dispatch(getTask(url.pathname));
  }, []);

  let taskPriorityStyle = "";
  switch (task.task_priority) {
    case "normal":
      taskPriorityStyle = "task-normal";
      break;
    case "high":
      taskPriorityStyle = "task-high";
      break;
    case "urgent":
      taskPriorityStyle = "task-urgent";
      break;
    default:
      break;
  }

  return (
    <div className={`${task && task.length !== 0 ? taskPriorityStyle : ""}`}>
      <div className="task">
        <h1>Task</h1>
        <input type="text" defaultValue={task.theme} />
        <p>
          Theme - <span>{task.theme}</span>
        </p>
        <p>
          Description - <span>{task.description}</span>
        </p>
        <p>
          Date start - <span>{task.date_start}</span>
        </p>
        <p>
          Date end - <span>{task.date_end}</span>
        </p>
        <p>
          Estimated_time - <span>{task.estimated_time}</span>
        </p>
        <p>
          Task priority - <span>{task.task_priority}</span>
        </p>
        <p>
          Task type - <span>{task.task_type}</span>
        </p>
        <p>
          Update - <span>{task.update}</span>
        </p>
      </div>
    </div>
  );
};

export { Task };

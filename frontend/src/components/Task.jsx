import { getTask } from "../Actions/TimeTrackerActions";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "./Loading";
import { dateNow } from "../Services/Date";
import { Comments } from "./Comments";

const Task = () => {
  const dispatch = useDispatch();
  const task = useSelector((state) => state.timetracker.CurrentTask);
  const { theme } = useParams();
  const [readOnly, setReadOnly] = useState(true);
  const isloading = useSelector((state) => state.loading.isLoading);

  useEffect(() => {
    dispatch(getTask(theme));
  }, []);

  const dateStart = dateNow(new Date(task.date_start));

  const dateEnd = dateNow(new Date(task.date_end));

  const edit = () => {
    setReadOnly((prevState) => ({ readOnly: !prevState.readOnly }));
  };

  let taskPriorityStyle = "normal";
  switch (task && task.length !== 0 ? task.task_priority : taskPriorityStyle) {
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
    <>
      {task ? (
        <div
          className={`${task && task.length !== 0 ? taskPriorityStyle : ""} `}
        >
          <div>
            <div className="task-header">
              <h1>
                Task:{" "}
                <span>
                  {task.theme}
                  <sup>{task.task_type}</sup>
                </span>
              </h1>
            </div>
            <div className="task-performer"></div>
          </div>

          <div className="task">
            <div>
              <p> Description </p>
              <span>{task.description}</span>
            </div>

            <div>
              <p> Start </p>
              <span>{dateStart}</span>
            </div>

            <div>
              <p> End </p>
              <span>{dateEnd}</span>
            </div>

            <div>
              <p> Estimated time </p>
              <span>{task.estimated_time}</span>
            </div>

            <div>
              <p> Priority </p>
              <span>{task.task_priority}</span>
            </div>
          </div>
          <div className="comments-wrapper gd">
            <Comments taskId={task.theme} />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export { Task };

import { editTask, getTask } from "../../Actions/TaskActions";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../Loading/Loading";
import { dateNow } from "../../Services/Date";
import { Comments } from "./Comments";
import { TimeLog } from "./TimeLog";
import { TimeSpent } from "./TimeSpent";
import "../../assets/css/task.scss";
import { BiEdit, BiArrowBack } from "react-icons/bi";
import { clean } from "../../Services/serviceFunction";
import { TaskDelete } from "./TaskDelete";
const Task = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isReadOnly, setIsReadOnly] = useState({ readOnly: true });

  const task = useSelector((state) => state.timetracker.CurrentTask);

  const { id, performers } = useSelector(
    (state) => state.timetracker.ProjectId
  );

  const { performer } = useSelector((state) => state.timetracker.CurrentTask);

  const { theme } = useParams();
  const currentUser = useSelector((state) => state.timetracker.CurrentUser.id);
  const isloading = useSelector((state) => state.loading.isLoading);
  const [themeTask, setThemeTask] = useState("");
  const [description, setDescription] = useState("");
  const [date_start, setDateStart] = useState("");
  const [date_end, setDateEnd] = useState("");
  const [task_type, setTaskType] = useState("");
  const [task_priority, setTaskPriority] = useState("");
  const [estimated_time, setEstimatedTime] = useState("");
  const [editPerformer, setPerformer] = useState("");

  const onSendDataUs = (event) => {
    event.preventDefault();

    let taskEditData = {
      theme: themeTask,
      description: description,
      date_start: date_start,
      date_end: date_end,
      task_type: task_type,
      task_priority: task_priority,
      estimated_time: estimated_time,
      performer: editPerformer,
      author: currentUser,
      project: id,
    };
    //function delete null undefined empty
    clean(taskEditData);
    dispatch(editTask(theme, taskEditData));
    navigate(-1);
  };

  useEffect(() => {
    dispatch(getTask(theme));
  }, [dispatch, theme]);

  // const dateStart = dateNow(new Date(task.date_start));

  // const dateEnd = dateNow(new Date(task.date_end));

  const edit = () => {
    setIsReadOnly((prevState) => ({ readOnly: !prevState.readOnly }));
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
      {!isloading ? (
        <div className={`${task ? taskPriorityStyle : ""} task-edit-wrapper`}>
          <div className="task-header">
            <h1 className={!isReadOnly.readOnly ? "blink" : ""}>
              Task{" "}
              <BiEdit
                onClick={() => edit()}
                className={!isReadOnly.readOnly ? "svg-edit" : "''"}
              />
              <TaskDelete task={task} />
            </h1>

            <TimeSpent task={task} />
            <div>
              <BiArrowBack onClick={() => navigate(-1)} />
            </div>
          </div>

          <div className="task-content-wrapper">
            <form
              className="form-task-edit comments-wrapper"
              onSubmit={onSendDataUs}
            >
              <div className="select">
                <label for="theme">Theme:</label>
                <input
                  onChange={(event) => setThemeTask(event.target.value)}
                  className={!isReadOnly.readOnly ? "input-effect" : "''"}
                  readOnly={isReadOnly.readOnly}
                  id="theme"
                  type="text"
                  defaultValue={task.theme}
                  name="theme"
                  required
                />
              </div>
              <div className="select">
                <label for="description">Description:</label>
                <textarea
                  onChange={(event) => setDescription(event.target.value)}
                  className={!isReadOnly.readOnly ? "input-effect" : "''"}
                  readOnly={isReadOnly.readOnly}
                  type="textarea"
                  id="description"
                  name="description"
                  defaultValue={task.description}
                  required
                />
              </div>
              <div className="select">
                <label for="date_start">Date start:</label>

                <p className={!isReadOnly.readOnly ? "none" : "date"}>
                  {task.date_start}
                </p>
                <input
                  onChange={(event) => setDateStart(event.target.value)}
                  className={
                    isReadOnly.readOnly ? "none" : "date, input-effect"
                  }
                  readOnly={isReadOnly.readOnly}
                  id="date_start"
                  type="datetime-local"
                  name="date_start"
                  required
                />
              </div>
              <div className="select">
                <label for="date_end">Date end:</label>
                <p className={!isReadOnly.readOnly ? "none" : "date"}>
                  {task.date_end}
                </p>
                <input
                  onChange={(event) => setDateEnd(event.target.value)}
                  className={
                    isReadOnly.readOnly ? "none" : "date, input-effect"
                  }
                  readOnly={isReadOnly.readOnly}
                  id="date_end"
                  type="datetime-local"
                  name="date_end"
                  required
                />
              </div>
              <div className="select">
                <label for="standard-select">Task type:</label>
                <select
                  disabled={isReadOnly.readOnly}
                  id="standard-select"
                  required
                  defaultValue={task.task_type}
                  onChange={(event) => setTaskType(event.target.value)}
                >
                  <option value="feature">feature</option>
                  <option value="bug">bug</option>
                </select>
              </div>
              <div className="select">
                <label for="standard-select-1">Task priority:</label>
                <select
                  disabled={isReadOnly.readOnly}
                  id="standard-select-1"
                  required
                  defaultValue={task.task_priority}
                  onChange={(event) => setTaskPriority(event.target.value)}
                >
                  <option value="normal">normal</option>
                  <option value="high">high</option>
                  <option value="urgent">urgent</option>
                </select>
              </div>
              <div className="select">
                <label for="standard-select-1">Performer:</label>
                <p className={!isReadOnly.readOnly ? "none" : "date"}>
                  {performer && performer.username.length !== 0
                    ? performer.username
                    : ""}
                </p>
                <select
                  className={
                    isReadOnly.readOnly ? "none" : "date, input-effect"
                  }
                  disabled={isReadOnly.readOnly}
                  id="standard-select"
                  required
                  onChange={(event) => setPerformer(event.target.value)}
                >
                  {performers.map((user) => {
                    return (
                      <option value={user.id} key={user.id}>
                        {user.username}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="select">
                <label for="standard-select">Estimated time:</label>
                <input
                  readOnly={isReadOnly.readOnly}
                  onChange={(event) => setEstimatedTime(event.target.value)}
                  className={!isReadOnly.readOnly ? "input-effect" : "''"}
                  type="number"
                  defaultValue={1}
                  name="estimated_time"
                  min="0"
                  required
                />
              </div>
              <button
                onClick={() => edit()}
                className={isReadOnly.readOnly ? "none" : "btn-edit"}
                type="submit"
              >
                Save edit
              </button>
            </form>

            <div className="comments-wrapper comments">
              <Comments />
            </div>
          </div>
          <div className="comments-wrapper">
            <TimeLog />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export { Task };

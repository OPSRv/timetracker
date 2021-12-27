import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTask } from "../../Actions/TaskActions";

const TaskCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name } = useParams();

  const { id, performers } = useSelector(
    (state) => state.timetracker.ProjectDetail
  );

  const defaultPerformer = performers[0].id;
  const currentUser = useSelector((state) => state.timetracker.CurrentUser.id);
  const [theme, setTheme] = useState("");
  const [description, setDescription] = useState("");
  const [date_start, setDatestart] = useState("");
  const [date_end, setDateEnd] = useState("");
  const [task_type, setTaskType] = useState("feature");
  const [task_priority, setTaskPriority] = useState("normal");
  const [estimated_time, setEstimatedTime] = useState("1");
  const [performer, setPerformer] = useState(defaultPerformer);

  const onSendDataUs = (event) => {
    event.preventDefault();
    let taskData = {
      theme: theme,
      description: description,
      date_start: date_start,
      date_end: date_end,
      task_type: task_type,
      task_priority: task_priority,
      estimated_time: estimated_time,
      performer: performer,
      author: currentUser,
      project: id,
    };
    dispatch(createTask(taskData));
    navigate(-1);
  };

  return (
    <div className="container-login select">
      <div className="">
        <h1>Task in project: {name}</h1>
        <form className="login-container" onSubmit={onSendDataUs}>
          <input
            onChange={(event) => setTheme(event.target.value)}
            type="text"
            placeholder="theme"
            autoComplete="username"
            name="theme"
            max="2"
            min="1"
            required
          />
          <input
            onChange={(event) => setDescription(event.target.value)}
            type="textarea"
            placeholder="description"
            name="description"
            required
          />
          <input
            onChange={(event) => setDatestart(event.target.value)}
            type="datetime-local"
            placeholder="date start"
            name="date_start"
            required
          />
          <input
            onChange={(event) => setDateEnd(event.target.value)}
            type="datetime-local"
            placeholder="date end"
            name="date_end"
            required
          />
          <div className="select">
            <select
              id="standard-select"
              required
              onChange={(event) => setTaskType(event.target.value)}
            >
              <option value="feature">feature</option>
              <option value="bug">bug</option>
            </select>
          </div>
          <div className="select">
            <select
              id="standard-select"
              required
              defaultValue="normal"
              onChange={(event) => setTaskPriority(event.target.value)}
            >
              <option value="normal">normal</option>
              <option value="high">high</option>
              <option value="urgent">urgent</option>
            </select>
          </div>
          <div className="select">
            <select
              id="standard-select"
              required
              onChange={(event) => setPerformer(event.target.value)}
            >
              {performers.map((user) => {
                return (
                  <option value={user.id} key={user.id} defaultValue={user.id}>
                    {user.username}
                  </option>
                );
              })}
            </select>
          </div>
          <input
            onChange={(event) => setEstimatedTime(event.target.value)}
            type="number"
            defaultValue={1}
            name="estimated_time"
            min="0"
            required
          />
          <button className="btn-save" type="submit">
            Create task
          </button>
        </form>
      </div>
    </div>
  );
};
export { TaskCreate };

import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProject, getUsers } from "../Actions/TimeTrackerActions";
import { Loading } from "./Loading";

// "id": 10,
// "theme": "React Router",
// "description": "asdasd",
// "date_start": "2021-12-14T17:57:00+02:00",
// "date_end": "2021-12-14T17:57:00+02:00",
// "update": "2021-12-14T18:43:07.000536+02:00",
// "task_type": "feature",
// "task_priority": "urgent",
// "estimated_time": 2,
// "comments": [],
// "performer": 41,
// "author": 41,
// "project": 60

const TaskCreate = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const { id } = useSelector((state) => state.timetracker.ProjectId);

  const [theme, setTheme] = useState("");
  const [description, setDescription] = useState("");
  const [date_start, setDatestart] = useState("");
  const [date_end, setDateEnd] = useState("");
  const [task_type, setTaskType] = useState("normal");
  const [task_priority, setTaskPriority] = useState("");
  const [estimated_time, setEstimatedTime] = useState("");
  const [performer, setPerformer] = useState("");
  const [author, setAuthor] = useState("");
  const [project, setProject] = useState("");

  const onSendDataUs = (event) => {
    event.preventDefault();
    let createAccount = {
      theme: theme,
      description: description,
      date_start: date_start,
      date_end: date_end,
      task_type: task_type,
      task_priority: task_priority,
      estimated_time: estimated_time,
      performer: 41,
      author: 41,
      project: id,
    };
    console.log(createAccount);
    // console.log(createAccount);
    // ApiService.createAccount(createAccount)
    //   .then((res) => {
    //     console.log(res, "res - createAccount");
    //   })
    //   .catch((err) => {
    //     console.log(err, "CreateAccount ERR ApiService");
    //   });
    // navigate("/login");
  };

  return (
    <div className="container-login">
      <h1>{name}</h1>
      <div className="">
        <form className="login-container" onSubmit={onSendDataUs}>
          <input
            onChange={(event) => setTheme(event.target.value)}
            type="text"
            placeholder="theme"
            autoComplete="username"
            name="theme"
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
          <input
            type="text"
            placeholder="task type"
            name="task_type"
            required
          />

          <select
            required
            onChange={(event) => setTaskType(event.target.value)}
          >
            <option value="normal">feature</option>
            <option value="high">bug</option>
          </select>

          <select
            required
            onChange={(event) => setTaskPriority(event.target.value)}
          >
            <option value="normal">normal</option>
            <option value="high">high</option>
            <option value="urgent">urgent</option>
          </select>

          <input
            onChange={(event) => setEstimatedTime(event.target.value)}
            type="number"
            placeholder="estimated time"
            name="estimated_time"
            required
          />
          <button className="btn-save" type="submit">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};
export { TaskCreate };

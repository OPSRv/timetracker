import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
//hoc
import { RequireAuth } from "./hoc/RequireAuth";
//components
import { SideBar } from "./Sidebar";
import { Dashboard } from "./Dashboard";
import { Projects } from "./Projects";
import { TimeLog } from "./TimeLog";
import { NoMatch } from "./NoMatch";
import { Users } from "./Users";
import { UserId } from "./UserId";
import { Task } from "./Task";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { ProjectId } from "./ProjectId";
import { ProjectCreate } from "./ProjectCreate";
import { TaskCreate } from "./TaskCreate";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SideBar />}>
          <Route index element={<Dashboard />} />

          <Route
            path="users"
            element={
              <RequireAuth>
                <Users />
              </RequireAuth>
            }
          />
          <Route path="/users/:username" element={<UserId />} />

          <Route
            path="projects"
            element={
              <RequireAuth>
                <Projects />
              </RequireAuth>
            }
          />
          <Route path="projects/:name" element={<ProjectId />} />
          <Route path="projects/:name/task-create" element={<TaskCreate />} />
          <Route path="project-create" element={<ProjectCreate />} />
          <Route path="task/:theme" element={<Task />} />
          <Route path="timelog" element={<TimeLog />} />
          <Route path="timelog" element={<TimeLog />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

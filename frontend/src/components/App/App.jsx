import { Routes, Route } from "react-router-dom";
//hoc
import { RequireAuth } from "../HOC/RequireAuth";
//components
import { SideBar } from "../Sidebar/Sidebar";
import { Dashboard } from "../Dashboard/Dashboard";
import { Projects } from "../Projects/Projects";
import { ProjectId } from "../Projects/ProjectId";
import { ProjectCreate } from "../Projects/ProjectCreate";
import { Users } from "../Users/Users";
import { UserId } from "../Users/UserId";
import { TimeLog } from "../Task/TimeLog";
import { TaskCreate } from "../Task/TaskCreate";
import { Task } from "../Task/Task";
import { Login } from "../Auth/Login";
import { Signup } from "../Auth/Signup";
import { NoMatch } from "../NoMatch/NoMatch";

const App = () => {
  return (
    <>
      {" "}
      <Routes>
        <Route path="/" element={<SideBar />}>
          <Route
            index
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
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
          <Route
            path="projects/:name"
            element={
              <RequireAuth>
                <ProjectId />
              </RequireAuth>
            }
          />
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

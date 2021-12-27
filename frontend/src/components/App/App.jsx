import { Routes, Route } from "react-router-dom";
//hoc
import { RequireAuth } from "../HOC/RequireAuth";
//components
import { SideBar } from "../Sidebar/Sidebar";
import { Dashboard } from "../Dashboard/Dashboard";
import { Projects } from "../Projects/Projects";
import { ProjectCreate } from "../Projects/ProjectCreate";
import { Users } from "../Users/Users";
import { UserId } from "../Users/UserId";
import { TaskCreate } from "../Task/TaskCreate";
import { Task } from "../Task/Task";
import { Login } from "../Auth/Login";
import { Signup } from "../Auth/Signup";
import { NoMatch } from "../NoMatch/NoMatch";
import { ProjectDetail } from "../Projects/ProjectDetail";

const App = () => {
  return (
    <>
      {" "}
      <Routes>
        <Route path="/" element={<SideBar />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<NoMatch />} />
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
                {/* <ProjectId /> */}
                <ProjectDetail />
              </RequireAuth>
            }
          />
          <Route
            path="projects/:name/task-create"
            element={
              <RequireAuth>
                <TaskCreate />
              </RequireAuth>
            }
          />
          <Route
            path="project-create"
            element={
              <RequireAuth>
                <ProjectCreate />
              </RequireAuth>
            }
          />
          <Route
            path="task/:theme"
            element={
              <RequireAuth>
                <Task />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;

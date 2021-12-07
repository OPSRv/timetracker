import * as React from "react";
import { Routes, Route } from "react-router-dom";

//components
import { SideBar } from "./Sidebar";
import { Dashboard } from "./Dashboard";
import { Project } from "./Project";
import { TimeLog } from "./TimeLog";
import { NoMatch } from "./NoMatch";
import { Users } from "./Users";
import { UserId } from "./UserId";
import { Task } from "./Task";
import { Login } from "./Login";
import { Signup } from "./Signup";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SideBar />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="/users/:username" element={<UserId />} />
          <Route path="project" element={<Project />} />
          <Route path="task" element={<Task />} />
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

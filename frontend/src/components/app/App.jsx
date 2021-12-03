import * as React from "react";
import { Routes, Route } from "react-router-dom";

//components
import SideBar from '../sidebar/Sidebar'
import Dashboard from '../dashboard/Dashboard'
import Project from '../project/Project'
import TimeLog from '../timeLog/TimeLog'
import NoMatch from '../noMatch/NoMatch'


 const App =() => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SideBar />}>
        <Route index element={<Dashboard />} />
          <Route path="project" element={<Project />} />
          <Route path="timelog" element={<TimeLog />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;


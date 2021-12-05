//   import ApiService from "../services/ApiService";
// import { useState, useEffect } from "react";
//   import { Link } from "react-router-dom";

// import Task from "./Task";

const Project = () => {
  // const [projects, setProjects] = useState([]);

  //   const getpPojects = () => {
  //     ApiService.getAllProject()
  //       .then((res) => {
  //         setProjects(res.data);
  //         console.log(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err, "PROJECT_LIST ERR ApiService");
  //       });
  //   };

  //   useEffect(() => {
  //     getpPojects();
  //   }, []);

  //   const listMenu = projects.map((item) => (
  //     <Link to={`project/${item.id}`} key={item.id}>
  //       <div className="user-card">
  //         <p>{item.description}</p>
  //       </div>
  //     </Link>
  //   ));

  return (
    <div>
      <h1>Project</h1>
    </div>
  );
};
export { Project };

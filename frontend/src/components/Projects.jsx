import { Link } from "react-router-dom";
import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GiUnstableProjectile } from "react-icons/gi";
import { FaPlusSquare } from "react-icons/fa";
import { getProjects } from "../Actions/TimeTrackerActions";
import "../assets/css/projects.scss";
import { Loading } from "./Loading";

const Projects = () => {
  const dispatch = useDispatch();
  const listProjects = useSelector((state) => state.timetracker.ProjectList);
  const isloading = useSelector((state) => state.loading.isLoading);

  const getProjectsCall = useCallback(
    () => dispatch(getProjects()),
    [dispatch]
  );

  useEffect(() => {
    console.log(listProjects);
    getProjectsCall();
  }, []);

  return (
    <>
      {isloading ? (
        <Loading />
      ) : (
        <div className="projects-container">
          <div className="projects-wrapper">
            {listProjects && listProjects.length !== 0 ? (
              listProjects.map((item) => {
                return (
                  <Link to={`${item.name}`} key={item.id}>
                    <div className="project-card">
                      <GiUnstableProjectile />
                      <p className="project-name">{item.name}</p>
                    </div>
                  </Link>
                );
              })
            ) : (
              <span></span>
            )}
          </div>
          <Link to="/project-create">
            <button className="btn-blue">
              <FaPlusSquare />
              New project
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export { Projects };

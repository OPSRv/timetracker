import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { FaPlusSquare } from "react-icons/fa";

import { Loading } from "../Loading/Loading";
import { ProjectList } from "./ProjectList";

import { getProjects } from "../../Actions/ProjectActions";

import "../../assets/css/projects.scss";

const Projects = () => {
  const dispatch = useDispatch();
  const projectList = useSelector((state) => state.timetracker.ProjectList);
  const isloading = useSelector((state) => state.loading.isLoading);

  const { is_superuser } = useSelector(
    (state) => state.timetracker.CurrentUser
  );

  const getProjectsCall = useCallback(
    () => dispatch(getProjects()),
    [dispatch]
  );

  useEffect(() => {
    getProjectsCall();
  }, [dispatch, getProjectsCall]);

  return (
    <>
      {isloading ? (
        <Loading />
      ) : (
        <div className="projects-container">
          <ProjectList projectList={projectList} />
          {is_superuser && !!is_superuser ? (
            <Link to="/project-create">
              <button className="btn-blue">
                <FaPlusSquare />
                New project
              </button>
            </Link>
          ) : (
            <span></span>
          )}
        </div>
      )}
    </>
  );
};

export { Projects };

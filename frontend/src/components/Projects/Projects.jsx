import { Link } from "react-router-dom";
import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GiUnstableProjectile } from "react-icons/gi";
import { FaPlusSquare } from "react-icons/fa";
import { MdSentimentDissatisfied } from "react-icons/md";
import "../../assets/css/projects.scss";
import { Loading } from "../Loading/Loading";
import { getProjects } from "../../Actions/ProjectActions";

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
  }, [dispatch]);
  return (
    <>
      {isloading ? (
        <Loading />
      ) : (
        <div className="projects-container">
          <div className="projects-wrapper">
            {!!projectList && projectList && projectList.length !== 0 ? (
              projectList.map((item) => {
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
              <span className="no-project">
                You are not assigned to any of the projects ...
                <MdSentimentDissatisfied />
              </span>
            )}
          </div>
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

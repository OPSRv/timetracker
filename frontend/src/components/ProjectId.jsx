import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { GiUnstableProjectile, GiBoltBomb } from "react-icons/gi";
import { getProjectId } from "../Actions/TimeTrackerActions";
import { Loading } from "./Loading";

const ProjectId = () => {
  const dispatch = useDispatch();
  const projectId = useSelector((state) => state.timetracker.ProjectId);
  const url = useLocation();

  const getProjectIdCall = useCallback(
    () => dispatch(getProjectId(url.pathname)),
    [dispatch]
  );

  useEffect(() => {
    getProjectIdCall();
  }, [dispatch]);

  const isloading = useSelector((state) => state.loading.isLoading);
  return (
    <>
      {isloading ? (
        <Loading />
      ) : (
        <div className="project">
          <h1>
            <GiUnstableProjectile /> {projectId.name}
          </h1>
          <p className="project-description">{projectId.description}</p>
          <div className="project-performers">
            <div className="project-item">
              <h3>Performers:</h3>{" "}
              {projectId && projectId.performers.length !== 0 ? (
                projectId.performers.map((item) => {
                  return (
                    <Link to={`/users/${item.username}`} key={item.id}>
                      <div className="user-performers">
                        <img
                          className="user-picture"
                          src={item.user_picture}
                          alt="userpicture"
                        />
                        <p className="users-username-text">{item.username}</p>
                        <span>-</span>
                        <p>{item.position}</p>
                      </div>
                    </Link>
                  );
                })
              ) : (
                <span></span>
              )}
            </div>
            <div className="project-item">
              <h3>Task</h3>
              {projectId && projectId.tasks.length !== 0 ? (
                projectId.tasks.map((item) => {
                  return (
                    <Link to={`/task/${item.theme}`} key={item.id}>
                      <div className="user-performers">
                        <GiBoltBomb />
                        <p>{item.theme}</p>
                      </div>
                    </Link>
                  );
                })
              ) : (
                <span>no tasks</span>
              )}
            </div>
          </div>
          <div className="btn-container">
            <Link to="/projects">
              <button className="btn-blue">Back</button>
            </Link>
            <Link to="task-create">
              <button className="btn-blue">Create task</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
export { ProjectId };

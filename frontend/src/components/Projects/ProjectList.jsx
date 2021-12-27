import { Link, useLocation } from "react-router-dom";
import { GiUnstableProjectile } from "react-icons/gi";
import { MdSentimentDissatisfied } from "react-icons/md";

const ProjectList = ({ projectList }) => {
  return (
    <div className="projects-wrapper">
      {projectList.length !== 0 ? (
        projectList.map(({ id, name }) => {
          return (
            <Link to={name} key={id}>
              <div className="project-card">
                <GiUnstableProjectile />
                <p className="project-name">{name}</p>
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
  );
};
export { ProjectList };

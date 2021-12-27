import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { MdOutlineDelete } from "react-icons/md";
import { deleteProject } from "../../Actions/ProjectActions";

const ProjectDelete = ({ project }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { name } = project;

  const deleteProjectId = () => {
    dispatch(deleteProject(name));
    navigate("/projects", { replace: true });
  };

  return (
    <div>
      <MdOutlineDelete
        className="project-trash"
        onClick={() => deleteProjectId()}
      />
    </div>
  );
};
export { ProjectDelete };

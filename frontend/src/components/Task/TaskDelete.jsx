import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { MdOutlineDelete } from "react-icons/md";
import { deleteTask } from "../../Actions/TaskActions";

const TaskDelete = ({ task }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { theme } = task;

  const deleteTaskTheme = () => {
    dispatch(deleteTask(theme));
    navigate(-1, { replace: true });
  };

  return (
    <div>
      <MdOutlineDelete
        className="project-trash"
        onClick={() => deleteTaskTheme()}
      />
    </div>
  );
};
export { TaskDelete };

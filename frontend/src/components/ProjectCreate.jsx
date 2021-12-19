import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProject, getUsers } from "../Actions/TimeTrackerActions";
import { Loading } from "./Loading";
import { useNavigate } from "react-router";
const ProjectCreate = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.timetracker.UserList);
  const isloading = useSelector((state) => state.loading.isLoading);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [performers, setPerformers] = useState(
    userList.length !== 0 ? userList : []
  );

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (isloading) {
    return <Loading />;
  }

  const checkedItems = performers.filter(({ checked }) => checked);

  const onSendDataUs = (event) => {
    event.preventDefault();

    const getPerformersId = [];

    const getPerformers = checkedItems.map((obj) => {
      getPerformersId.push(obj.id);
    });

    let project_data = {
      name: name,
      description: description,
      slug: name,
      performers: getPerformersId,
    };

    dispatch(createProject(project_data));
    navigate("/projects");
  };

  const newCheckboxes = [...userList];
  return (
    <div className="project-create">
      <form className="login-container" onSubmit={onSendDataUs}>
        <input
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Name project"
          autoComplete="name"
          name="name"
          defaultValue={"PROJECT"}
          required
        />
        <input
          onChange={(event) => setDescription(event.target.value)}
          type="text"
          placeholder="Description"
          name="description"
          defaultValue={"Description PROJECT"}
          required
        />
        <div className="user-checkbox-wrapper">
          {userList.length !== 0 ? (
            userList.map((checkbox, index) => (
              <div className="user-checkbox" key={checkbox.id}>
                <input
                  type={"checkbox"}
                  onChange={(e) => {
                    newCheckboxes[index].checked = e.target.checked;
                    setPerformers(newCheckboxes);
                  }}
                  checked={checkbox.checked}
                  id={checkbox.id}
                  className="styled-checkbox"
                />
                <label htmlFor={checkbox.id}>
                  {" "}
                  <img
                    className="user-picture-small"
                    src={checkbox.user_picture}
                    alt="userpicture"
                  />
                  <p>{checkbox.username}</p>
                </label>
              </div>
            ))
          ) : (
            <Loading />
          )}
        </div>
        <div className="user-checkbox-added">
          <h3>Add users in project:</h3>
          {checkedItems.isLoading !== 0 ? (
            checkedItems.map((checkbox, index) => (
              <div key={checkbox.id}>
                <p className="add-user">{checkbox.username}</p>
              </div>
            ))
          ) : (
            <Loading />
          )}
        </div>
        <button className="btn-save" type="submit">
          Create project
        </button>
      </form>
    </div>
  );
};
export { ProjectCreate };

const ProjectPerformers = ({ user_picture, username, position }) => {
  return (
    <div className="user-performers">
      <img className="user-picture" src={user_picture} alt="userpicture" />
      <p className="users-username-text">{username}</p>
      <span>-</span>
      <p>{position}</p>
    </div>
  );
};
export { ProjectPerformers };

import { useState } from "react";
import { VscDiffAdded } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addCommnetTask } from "../Actions/TimeTrackerActions";
import { dateNow } from "../Services/Date";

const Comments = () => {
  const dispatch = useDispatch();
  const [commentText, setCommentText] = useState("");
  const { theme } = useParams();
  const { comments } = useSelector((state) => state.timetracker.CurrentTask);

  const { username, user_picture } = useSelector(
    (state) => state.timetracker.CurrentUser
  );

  const date = new Date();

  const onSendDataUs = (event) => {
    event.preventDefault();
    let comment_data = {
      theme: theme,
      comments: [
        {
          text: commentText,
          auhtor: username,
          user_picture: user_picture,
          date: dateNow(date),
        },
        ...comments,
      ],
    };
    setCommentText("");

    dispatch(addCommnetTask(theme, comment_data));
  };

  return (
    <div className="">
      <div className="textarea-wrapper">
        <form onSubmit={onSendDataUs}>
          <button className="btn-blue" type="submit">
            <VscDiffAdded />
          </button>
          <input
            id="input-comment"
            type="textarea"
            className="input-comment"
            value={commentText}
            onChange={(event) => setCommentText(event.target.value)}
            placeholder="comment"
            name="comment"
            required
          />
        </form>
      </div>
      {comments && comments.length !== 0 ? (
        comments.map((item) => {
          return (
            <div className="comments-card">
              <div className="comments-card-wrapper">
                <div className="comments-card-picture">
                  <img src={item.user_picture} alt="user_picture" />
                </div>

                <div>
                  <div>
                    <p className="author-comment">
                      {item.auhtor}{" "}
                      <span className="task-date-text">({item.date})</span>
                    </p>
                  </div>

                  <div className="comment-text">
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p>no comments</p>
      )}
    </div>
  );
};
export { Comments };

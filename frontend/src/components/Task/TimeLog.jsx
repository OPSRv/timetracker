import { useState } from "react";
import { GiExtraTime } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { addTimeLog } from "../../Actions/TaskActions";

import { dateNow } from "../../Services/Date";

const TimeLog = () => {
  const dispatch = useDispatch();

  const { id, timelog } = useSelector((state) => state.timetracker.CurrentTask);
  const { username, user_picture } = useSelector(
    (state) => state.timetracker.CurrentUser
  );

  const [commentText, setCommentText] = useState("");
  const [spent_time, setSpentTime] = useState("1");

  const date = new Date();

  const onSendDataUs = (event) => {
    event.preventDefault();
    let timeLog_data = {
      spent_time: spent_time,
      task: id,
      comment: {
        text: commentText,
        date: dateNow(date),
        auhtor: username,
        user_picture: user_picture,
      },
    };
    setSpentTime("1");
    setCommentText("");
    dispatch(addTimeLog(timeLog_data));
  };

  return (
    <div className="timelog-wrapper">
      <div className="textarea-wrapper ">
        <form onSubmit={onSendDataUs} className="timelog-form">
          <button className="btn-blue" type="submit">
            <GiExtraTime />
          </button>
          <input
            id="input-comment"
            type="number"
            className="input-comment input-timelog-time"
            min={1}
            max={999}
            value={spent_time}
            onChange={(event) => setSpentTime(event.target.value)}
            name="comment"
            required
          />
          <input
            type="text"
            className="input-comment"
            value={commentText}
            onChange={(event) => setCommentText(event.target.value)}
            placeholder="what's done ?"
            name="comment"
            required
          />
        </form>
      </div>
      <div className="comments-card">
        {timelog && timelog.length !== 0 ? (
          timelog.map((item) => {
            return (
              <div className="" key={item.id}>
                <div className="comments-card-wrapper">
                  <div className="">
                    <div className="comments-card-picture">
                      <img src={item.comment.user_picture} alt="user_picture" />
                    </div>

                    <div className="">
                      <div className="author-comment">
                        <span>{item.comment.auhtor} </span>
                        <span className="task-date-text">
                          ({item.comment.date})
                        </span>
                      </div>

                      <div className="comment-text">
                        <p>{item.comment.text}</p>
                      </div>
                    </div>

                    <div className="timelog-hours">
                      <p>{item.spent_time} hours</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>no timelog</p>
        )}
      </div>
    </div>
  );
};
export { TimeLog };

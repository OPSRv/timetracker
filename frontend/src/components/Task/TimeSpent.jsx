const TimeSpent = ({ task }) => {
  const { timelog } = task;

  const sumaSpentedHours = timelog;

  return (
    <div>
      <div>
        <div className="spent-time">
          {sumaSpentedHours ? (
            <span>
              Spent time:{" "}
              {timelog
                .map((item) => item.spent_time)
                .reduce((prev, curr) => prev + curr, 0)}{" "}
              hours
            </span>
          ) : (
            <span>0</span>
          )}{" "}
        </div>
      </div>
    </div>
  );
};
export { TimeSpent };

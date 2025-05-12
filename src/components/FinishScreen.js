function FinishScreen({
  points,
  maxPossiblePoints,
  highScore,
  status,
  dispatch,
}) {
  const percantage = (points / maxPossiblePoints) * 100;

  let emoji = "";

  if (percantage === 100) {
    emoji = "🥳";
  }
  if (percantage >= 80 && percantage < 100) {
    emoji = "😎";
  }
  if (percantage >= 50 && percantage < 80) {
    emoji = "😐";
  }
  if (percantage < 50) {
    emoji = "😢";
  }

  return (
    <>
      <p className="result">
        <span>{emoji}</span>
        You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percantage)}%)
      </p>
      <p className="highscore">
        ( Highscore is <strong>{highScore}</strong> points ✨)
      </p>

      {status === "finished" && (
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "restart" })}
        >
          Restart Quiz
        </button>
      )}
    </>
  );
}

export default FinishScreen;

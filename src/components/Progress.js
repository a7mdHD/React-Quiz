import { useQuiz } from "../contexts/QuizContext";

function Progress() {
  const { questionNo, index, points, maxPossiblePoints, answer } = useQuiz();

  return (
    <header className="progress">
      <progress max={questionNo} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1} </strong> / {questionNo}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints} points
      </p>
    </header>
  );
}

export default Progress;

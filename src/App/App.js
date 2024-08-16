import questionsData from "../data/questionsData.json"
import QuestionComponent from "../QuestionsComponents/QuestionComponent"
import { useState } from "react";
import "./App.css";

const App = () => {
  const [currentQuestionId, setCurrentQuestionId] = useState(
    "question_fullscreen_01"
  );

  const handleNextQuestion = (nextQuestionId) => {
    setCurrentQuestionId(nextQuestionId);
  };

  const currentQuestion = questionsData.questions.find(
    (q) => q.id === currentQuestionId
  );

  return (
    <div>
      {currentQuestion ? (
        <QuestionComponent
          question={currentQuestion}
          onNext={handleNextQuestion}
        />
      ) : (
        <h1>All questions are completed!</h1>
      )}
    </div>
  );
};

export default App;
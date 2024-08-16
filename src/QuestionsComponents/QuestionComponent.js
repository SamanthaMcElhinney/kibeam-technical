import React, { useState, useEffect } from "react";

const QuestionComponent = ({ question, onNext }) => {
  const [promptIndex, setPromptIndex] = useState(0);

  useEffect(() => {
    if (question.randomize) {
      const randomIndex = Math.floor(Math.random() * question.prompts.length);
      setPromptIndex(randomIndex);
    }
  }, [question]);

  const handleAction = () => {
    onNext(question.nextQuestion);
  };

  const currentPrompt = question.prompts ? question.prompts[promptIndex] : null;

  return (
    <div>
      {currentPrompt ? (
        <>
          <h2>{currentPrompt.prompt}</h2>
          <button onClick={handleAction}>{currentPrompt.response}</button>
        </>
      ) : (
        <div>
          <h2>{question.prompt}</h2>
          <button onClick={handleAction}>Complete Interaction</button>
        </div>
      )}
    </div>
  );
};

export default QuestionComponent;

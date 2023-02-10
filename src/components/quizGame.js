import React, { useState } from "react";

let questions = {
  "questions": []
};

function addQuestion(question, options) {
const newQuestion = {
  "question": question,
  "options": []
};

for (const option of options) {
  newQuestion.options.push({ "option": option[0], "correct": option[1] });
}

questions.questions.push(newQuestion);
}

addQuestion("What does HTML stand for?",
[
  ["HyperText Markup Language", true],
  ["Berlín", false],
  ["Roma", false],
  ["Londres", false]
]);

export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [remainingQuestions, setRemainingQuestions] = useState(questions.length);
  const handleOptionClick = (index) => {
    if (index === questions[currentQuestion].answer) {
        alert("Correct");
        return;
    } else {
      alert("Incorrect");
    }

    setCurrentQuestion(currentQuestion + 1);
    setRemainingQuestions(remainingQuestions - 1);
  };

  return (
    <div style={styles.quizContainer}>
      <div style={styles.question}>
        <p>{questions[currentQuestion].question}</p>
      </div>
      <div style={styles.options}>
        <button onClick={() => handleOptionClick(0)} style={styles.option}>
          {questions[currentQuestion].options[0]}
        </button>
        <button onClick={() => handleOptionClick(1)} style={styles.option}>
          {questions[currentQuestion].options[1]}
        </button>
        <br />
        <button onClick={() => handleOptionClick(2)} style={styles.option}>
          {questions[currentQuestion].options[2]}
        </button>
        <button onClick={() => handleOptionClick(3)} style={styles.option}>
          {questions[currentQuestion].options[3]}
        </button>
      </div>
      <div style={styles.remainingQuestions}>
        <p>Preguntas restantes: {remainingQuestions}</p>
      </div>
    </div>
  );
}

const styles = {
  quizContainer: {
    textAlign: "center"
  },
  question: {
    fontSize: 20,
    marginTop: 50
  },
  options: {
    marginTop: 20
  },
  option: {
    fontSize: 16,
    marginTop: 20,
    padding: 10,
    backgroundColor: "lightblue",
    border: "none",
    borderRadius: 5,
    cursor: "pointer"
  },
  remainingQuestions: {
    marginTop: 20
  }
}
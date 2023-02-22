import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Confetti } from './confetti.js';
import '../App.css';

export const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [questionFirst, setQuestionFirst] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinish, setIsFinish] = useState(false);
  const [remainingQuestions, setRemainingQuestions] = useState(10);

  const { category, pagination } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://127.0.0.1:8000/api/quiz/${category}?p=${pagination}`);
      const data = await response.json();
      setQuestions(data.results);
    };
    fetchData();
  }, [category, pagination]);

  function submitOptions(isCorrect, e) {
    if (isCorrect) {
      setScore(score + 1);
    }
    e.target.classList.add(isCorrect ? "correct" : "incorrect");
    setRemainingQuestions(remainingQuestions - 1);
    const answerButton = e.target.parentNode.querySelectorAll('.option-button');
    answerButton.forEach(button => button.disabled = true);
    setTimeout(() => {
      if (questionFirst === questions.length - 1) {
        setIsFinish(true);
      } else {
        setQuestionFirst(questionFirst + 1);
      }
    }, 1500);
  }

  if (isFinish)
    return (
      <div>
        <Confetti />
        <div className="card">
          <div className="finish-game">
            <p>
              Obtuviste {score} puntos de {questions.length} preguntas!
            </p>
            <button onClick={() => (window.location.href = "/quiz")}>
              Volver a jugar
            </button>
            <p></p>
            <button onClick={() => (window.location.href = "/home")}>
              Volver al inicio
            </button>
          </div>
        </div>
      </div>
    );
  return (
    <div className="card">
      <div className="question">
        <p>{questions[questionFirst]?.question}</p>
        <div className="quizContainer">
          <div className="boton">
            <div className="options">
              {questions[questionFirst]?.options?.map((response) => (
                <button
                  className="option-button"
                  key={response.answer}
                  onClick={(e) => submitOptions(response.is_correct, e)}
                >
                  {response.answer}
                </button>
              ))}
            </div>
            <br></br>
            <div className="remainingQuestions">
              <p>Remaining questions: {remainingQuestions}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Confetti } from './Confetti.js';
import '../App.css';

export const QuizGame = () => {
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
  useEffect(() => {
    const selectedQuiz = localStorage.getItem('selectedQuiz');
    if (isFinish && selectedQuiz) {
      localStorage.setItem(selectedQuiz, 'true');
    }
  }, [isFinish]);
  
  const selectedQuiz = localStorage.getItem('selectedQuiz');

  function isLevel1Complete() {
    return localStorage.getItem('quiz/html/1') === 'true';
  }

  function getNextQuiz(selectedQuiz) {
    if (selectedQuiz === 'quiz/html/2' && !isLevel1Complete()) {
      return 'HTML level 1';
    } else if (selectedQuiz === 'quiz/html/3' && !isLevel1Complete()) {
      return 'HTML level 1';
    } else {
      return null;
    }
  }

  function isQuizComplete(quiz) {
    return localStorage.getItem(quiz) === 'true';
  }

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
        localStorage.removeItem('selectedQuiz');
      } else {
        setQuestionFirst(questionFirst + 1);
      }
    }, 1500);
  }

  useEffect(() => {
    if (selectedQuiz && selectedQuiz !== `/${category}/${pagination}`) {
      const requiredQuiz = getNextQuiz(selectedQuiz);
      if (requiredQuiz && !isQuizComplete(selectedQuiz)) {
        alert(`Complete ${requiredQuiz} first!`);
        window.location.href = selectedQuiz;
      }
    }
    localStorage.setItem('selectedQuiz', `/${category}/${pagination}`);
  }, [category, pagination, selectedQuiz]);

  if (isFinish)
    return (
      <div>
        <Confetti />
        <div className="card">
          <div className="finish-game">
            <p>
              Obtuviste {score} puntos de {questions.length} preguntas!
            </p>
            <button onClick={() => {
                localStorage.removeItem('selectedQuiz');
                window.location.href = "/quiz/:category/:pagination";
            }}>
              Play again
            </button>
            <p></p>
            <button onClick={() => {
              localStorage.getItem('selectedQuiz');
              window.location.href = "/home";
            }}>
              Home
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
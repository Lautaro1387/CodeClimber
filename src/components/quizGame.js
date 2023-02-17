import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import questions from '../js/questions.js';
import {Confetti} from './confetti.js';

export const Quiz = () => {
  const [questionFirst, setQuestionFirst] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinish, setIsFinish] = useState(false);
  const [remainingQuestions, setRemainingQuestions] = useState(questions.length);
  const [datos, setDatos] = useState([]);
  
    console.log('fetching...')
    useEffect(() => {
      fetch('http://127.0.0.1:8000/api/quiz')
        .then(response => response.json())
        .then(data => setDatos(data))
        .catch(error => console.error(error));
    }, []);

  function submitOptions(isCorrect, e) {
    if (isCorrect) {
      setScore(score + 1);
    }
    e.target.classList.add(isCorrect ? "correct" : "incorrect");
    setRemainingQuestions(remainingQuestions - 1);

    setTimeout(() => {
      if (questionFirst === questions.length -1) {
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
            <p>Obtuviste {score} puntos de {questions.length} preguntas!</p>
            <button onClick={() => window.location.href="/quiz"}>
              Volver a jugar
            </button>
            <p></p>
            <button onClick={() => window.location.href="home"}>
              Volver al inicio
            </button>
          </div>
        </div>
      </div>
    )

  return (
      <div className="card">
          {datos.map(pregunta =>
          <div className="question" key={pregunta.id}>
            <p>{pregunta.question}</p>
          <div className="quizContainer">
            <div className="boton">
              <div className="options">
                {datos[questionFirst].options.map((response) => (
                  <button className="option-button"
                  key={response.answer}
                  onClick={(e) => submitOptions(response.isCorrect, e)}>
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
            )}
        </div>
  );
}
/*  const [messages, setMessages] = useState('')
const handleOptionClick = (index) => {
  if (index === questions[score].answer) {
    setScore(score + 1);
    setMessages('Respuesta correcta')
  } else {
    setScore(score - 1);
    setMessages('Respuesta incorrecta');
  }
  
  <button onClick={() => handleOptionClick(0)} className="option">
  {questions[score].options[0]}
  </button>
  <button onClick={() => handleOptionClick(1)} className="option">
    {questions[score].options[1]}
  </button>
  <button onClick={() => handleOptionClick(2)} className="option">
  {questions[score].options[2]}
  </button>
  <button onClick={() => handleOptionClick(3)} className="option">
  {questions[score].options[3]}
  </button>
};

return (
  <div>
  <div className="finally">
    <p className='correct'>{messages}</p>
  </div>
  );
  */
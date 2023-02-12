import React, { useState } from "react";
import '../styles/App.css'

const questions = [  {    question: "¿Cuál es la capital de Franciaaaaaaaaaaaaaaaaaa",    options: [      "Madrid",      "París",      "Roma",      "Berlín"    ],
    answer: 1
  },
  {
    question: "¿Cuál es la capital de Italia?",
    options: [
      "Londres",
      "París",
      "Roma",
      "Berlín"
    ],
    answer: 2
  },
  {
    question: "¿Cuál es la capital de España?",
    options: [
      "Madrid",
      "París",
      "Roma",
      "Berlín"
    ],
    answer: 0
  }
];

export const Quiz = () => {
  const [score, setScore] = useState(0);
  const [messages, setMessages] = useState('')
  const [remainingQuestions, setRemainingQuestions] = useState(questions.length);
  const handleOptionClick = (index) => {
    if (index === questions[score].answer) {
      setScore(score + 1);
      setMessages('Respuesta correcta')
    } else {
      setScore(score - 1);
      setMessages('Respuesta incorrecta');
    }

    setRemainingQuestions(remainingQuestions - 1);
  };

  return (
    <div>
      <div className="card">
        <div className="question">
          <p>{questions[score].question}</p>
            <div className="quizContainer">
              <div className="boton">
                <div className="options">
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
                </div>
              </div>
            </div>
            <div className="remainingQuestions">
              <p>Preguntas restantes: {remainingQuestions}</p>
            </div>
            <div className="finally">
              <p className='correct'>{messages}</p>
            </div>
            </div>
          </div>
        </div>
  );
}
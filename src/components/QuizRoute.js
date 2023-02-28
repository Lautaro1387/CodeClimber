import React, { useState, useEffect } from 'react';
import { QuizGame } from './QuizGame.js';


export const Quizroute = () => {
  const [selectedQuiz, setSelectedQuiz] = useState('');
  const [isLevel1Complete, setIsLevel1Complete] = useState(false);

  useEffect(() => {
    // Cambiar el color del círculo y agregar un tick cuando se selecciona un quiz
    const quizRoutes = document.querySelectorAll('.quiz-route');
    const selectedQuiz = localStorage.getItem('selectedQuiz');

    quizRoutes.forEach((route) => {
      const progressCount = route.querySelector('.progress-count');
      if (route.getAttribute('href') === selectedQuiz) {
        progressCount.classList.add('done');
      } else {
        progressCount.classList.remove('done');
      }
    });
  }, []);
  useEffect(() => {
    const isHtml1Complete = localStorage.getItem('quiz/html/1') === 'true';
    const isHtml2Complete = localStorage.getItem('quiz/html/2') === 'true';
    const isHtml3Complete = localStorage.getItem('quiz/html/3') === 'true';
  
    if (isHtml1Complete && !isHtml2Complete) {
      const html2Link = document.querySelector('a[href="quiz/html/2"]');
      html2Link.classList.remove('disabled');
    }
  
    if (isHtml1Complete && isHtml2Complete && !isHtml3Complete) {
      const html3Link = document.querySelector('a[href="quiz/html/3"]');
      html3Link.classList.remove('disabled');
    }
  }, []);
  
  const handleQuizClick = (event) => {
    event.preventDefault();
    const quizRoute = event.currentTarget;
    if (quizRoute.getAttribute('href') === 'quiz/html/2' && !isLevel1Complete) {
      alert('First complete level 1')
    } else if (quizRoute.getAttribute('href') === 'quiz/html/3' && !isLevel1Complete) {
      alert('First complete level 1')
    } else {
      setSelectedQuiz(quizRoute.getAttribute('href'));
      const progressCount = quizRoute.querySelector('.progress-count');
      progressCount.classList.add('done');
      progressCount.textContent = '';
      window.location.href = quizRoute.getAttribute('href');
    }
  };

  return (
  <div>
    <section className="step-wizard">
      <ul className="step-wizard-list">
        <li className="step-wizard-item current-item">
          <a href="quiz/html/1" className="quiz-route" data-quiz-number="1" onClick={handleQuizClick}>
            <span className="progress-count">1</span>
            <span className="progress-label">HTML level 1</span>
          </a>
        </li>
        <li className="step-wizard-item current-item">
          <a href="quiz/html/2" className="quiz-route" data-quiz-number="2" onClick={handleQuizClick}>
            <span className="progress-count">2</span>
            {!isLevel1Complete ? <i className="fa fa-lock"></i> : <span className="progress-label">HTML level 3</span>}
          </a>
        </li>
        <li className="step-wizard-item current-item">
          <a href="quiz/html/3" className="quiz-route" data-quiz-number="3" onClick={handleQuizClick}>
            <span className="progress-count">3</span>
            {!isLevel1Complete ? <i className="fa fa-lock"></i> : <span className="progress-label">HTML level 3</span>}
          </a>
        </li>
      </ul>
    </section>
      <section class="step-wizard">
        <ul class="step-wizard-list">
        <li class="step-wizard-item current-item">
                <a href="quiz/css/1" className="quiz-route" data-quiz-number="1" onClick={handleQuizClick}>
                    <span class="progress-count">1</span>
                    <span class="progress-label">CSS level 1</span>
                    </a>
                </li>
                <li class="step-wizard-item current-item">
                <a href="quiz/css/2" className="quiz-route" data-quiz-number="2" onClick={handleQuizClick}>
                    <span class="progress-count">2</span>
                    {!isLevel1Complete ? <i className="fa fa-lock"></i> : <span className="progress-label">HTML level 3</span>}
                    </a>
                </li>
                <li class="step-wizard-item current-item">
                <a href="quiz/css/3" className="quiz-route" data-quiz-number="3" onClick={handleQuizClick}>
                    <span class="progress-count">3</span>
                    {!isLevel1Complete ? <i className="fa fa-lock"></i> : <span className="progress-label">HTML level 3</span>}
                    </a>
                </li>
            </ul>
        </section>
        <section class="step-wizard">
        <ul class="step-wizard-list">
            <li class="step-wizard-item current-item">
                <a href="quiz/javascript/1" className="quiz-route" data-quiz-number="1" onClick={handleQuizClick}>
                    <span class="progress-count">1</span>
                    <span class="progress-label">JavaScript level 1</span>
                    </a>
                </li>
                <li class="step-wizard-item current-item">
                <a href="quiz/javascript/2" className="quiz-route" data-quiz-number="2" onClick={handleQuizClick}>
                    <span class="progress-count">2</span>
                    {!isLevel1Complete ? <i className="fa fa-lock"></i> : <span className="progress-label">HTML level 3</span>}
                    </a>
                </li>
                <li class="step-wizard-item current-item">
                <a href="quiz/javascript/3" className="quiz-route" data-quiz-number="3" onClick={handleQuizClick}>
                    <span class="progress-count">3</span>
                    {!isLevel1Complete ? <i className="fa fa-lock"></i> : <span className="progress-label">HTML level 3</span>}
                    </a>
                </li>
            </ul>
        </section>
        <section class="step-wizard">
        <ul class="step-wizard-list">
        <li class="step-wizard-item current-item">
                <a href="quiz/python/1" className="quiz-route" data-quiz-number="1" onClick={handleQuizClick}>
                    <span class="progress-count">1</span>
                    <span class="progress-label">Python level 1</span>
                    </a>
                </li>
                <li class="step-wizard-item current-item">
                <a href="quiz/python/2" className="quiz-route" data-quiz-number="2" onClick={handleQuizClick}>
                    <span class="progress-count">2</span>
                    {!isLevel1Complete ? <i className="fa fa-lock"></i> : <span className="progress-label">HTML level 3</span>}
                    </a>
                </li>
                <li class="step-wizard-item current-item">
                <a href="quiz/python/3" className="quiz-route" data-quiz-number="3" onClick={handleQuizClick}>
                    <span class="progress-count">3</span>
                    {!isLevel1Complete ? <i className="fa fa-lock"></i> : <span className="progress-label">HTML level 3</span>}

                    </a>
                </li>
            </ul>
        </section>
    </div>
    )
}


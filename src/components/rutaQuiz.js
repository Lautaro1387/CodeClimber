import React, { useState, useEffect } from 'react';

export const Quizroute = () => {
  const [selectedQuiz, setSelectedQuiz] = useState('');

  useEffect(() => {
    // Cambiar el color del círculo y agregar un tick cuando se selecciona un quiz
    const quizRoutes = document.querySelectorAll('.quiz-route');
    quizRoutes.forEach((route) => {
      const progressCount = route.querySelector('.progress-count');
      if (route.getAttribute('href') === selectedQuiz) {
        progressCount.classList.add('done');
        progressCount.textContent = '✓';
      } else {
        progressCount.classList.remove('done');
        progressCount.textContent = route.dataset.quizNumber;
      }
    });
  }, [selectedQuiz]);

  const handleQuizClick = (event) => {
    event.preventDefault();
    const quizRoute = event.currentTarget;
    setSelectedQuiz(quizRoute.getAttribute('href'));
    window.location.href = quizRoute.getAttribute('href');
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
              <span className="progress-label">HTML level 2</span>
            </a>
          </li>
          <li className="step-wizard-item current-item">
            <a href="quiz/html/3" className="quiz-route" data-quiz-number="3" onClick={handleQuizClick}>
              <span className="progress-count">3</span>
              <span className="progress-label">HTML level 3</span>
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
                    <span class="progress-label">CSS level 2</span>
                    </a>
                </li>
                <li class="step-wizard-item current-item">
                <a href="quiz/css/3" className="quiz-route" data-quiz-number="3" onClick={handleQuizClick}>
                    <span class="progress-count">3</span>
                    <span class="progress-label">CSS level 3</span>
                    </a>
                </li>
            </ul>
        </section>
        <section class="step-wizard">
        <ul class="step-wizard-list">
            <li class="step-wizard-item current-item">
                <a href="quiz/javascript/1" className="quiz-route" data-quiz-number="1" onClick={handleQuizClick}>
                    <span class="progress-count">1</span>
                    <span class="progress-label">JavaScript level 2</span>
                    </a>
                </li>
                <li class="step-wizard-item current-item">
                <a href="quiz/javascript/2" className="quiz-route" data-quiz-number="2" onClick={handleQuizClick}>
                    <span class="progress-count">2</span>
                    <span class="progress-label">JavaScript level 2</span>
                    </a>
                </li>
                <li class="step-wizard-item current-item">
                <a href="quiz/javascript/3" className="quiz-route" data-quiz-number="3" onClick={handleQuizClick}>
                    <span class="progress-count">3</span>
                    <span class="progress-label">JavaScript level 3</span>
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
                    <span class="progress-label">Python level 2</span>
                    </a>
                </li>
                <li class="step-wizard-item current-item">
                <a href="quiz/python/3" className="quiz-route" data-quiz-number="3" onClick={handleQuizClick}>
                    <span class="progress-count">3</span>
                    <span class="progress-label">Python level 3</span>
                    </a>
                </li>
            </ul>
        </section>
    </div>
    )
}


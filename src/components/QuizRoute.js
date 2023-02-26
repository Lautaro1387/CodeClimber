import React, { useState, useEffect } from 'react';

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
        progressCount.textContent = '✓';
      } else {
        progressCount.classList.remove('done');
        progressCount.textContent = route.dataset.quizNumber;
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
      window.location.href = quizRoute.getAttribute('href');
    }
  };

  return (
    <div>
      <section className="step-wizard">
        <ul className="step-wizard-list">
          <li className="step-wizard-item current-item">
            <a href="quiz/html/1" className="quiz-route" data-quiz-number="1" onClick={handleQuizClick}>
              <span className="progress-count"><i className="fa fa-lock"></i></span>
              <span className="progress-label">HTML level 1</span>
            </a>
          </li>
          <li className="step-wizard-item current-item">
            <a href="quiz/html/2" className="quiz-route" data-quiz-number="2" onClick={handleQuizClick} style={{ pointerEvents: isLevel1Complete ? 'auto' : 'none' }}>
              <span className="progress-count"><i className="fa fa-lock"></i></span>
              {!isLevel1Complete ? <i className="fa fa-lock"></i> : <span className="progress-label">HTML level 2</span>}
            </a>
          </li>
          <li className="step-wizard-item current-item">
            <a href="quiz/html/3" className="quiz-route" data-quiz-number="3" onClick={handleQuizClick} style={{ pointerEvents: isLevel1Complete ? 'auto' : 'none' }}>
              <span className="progress-count">3</span>
              {!isLevel1Complete ? <i className="fa fa-lock"></i> : <span className="progress-label">HTML level 3</span>}
            </a>
          </li>
        </ul>
      </section>
    </div>
    )
}


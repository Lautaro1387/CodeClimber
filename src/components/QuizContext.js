import React from 'react';

const QuizContext = React.createContext({
  selectedQuiz: '',
  setSelectedQuiz: () => {},
});

export default QuizContext;
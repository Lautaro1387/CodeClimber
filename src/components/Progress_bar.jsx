import React from 'react';

const ProgressBar = (props) => {
  const { score } = props;
  const progress = (score / 30) * 100; // Calculate progress as percentage
  const barStyle = {
    width: `${progress}%`,
  };
  return (
    <div className="progress-bar">
      <div className="bar" style={barStyle}></div>
      <div className="label">{`${progress}%`}</div>
    </div>
  );
};

export default ProgressBar;

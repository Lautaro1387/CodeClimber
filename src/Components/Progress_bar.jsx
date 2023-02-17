import React from 'react';

const ProgressBar = (props) => {
  const { progress } = props;
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
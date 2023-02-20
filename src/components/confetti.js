import React, { useEffect, useState } from 'react';
import ReactConfetti from 'react-confetti';

export const Confetti = () => {
    const [windowDimension, setWindow] = useState({width: window.innerWidth, height:window.innerHeight})
    const sizeDetect = () => {
      setWindow({width: window.innerWidth, height:window.innerHeight});
    }

    useEffect(() => {
      window.addEventListener('resize', sizeDetect);
      return () => {
        window.removeEventListener('resize', sizeDetect);
      }
    }, [windowDimension]);

    return (
      <>
        <ReactConfetti
          width={windowDimension.width}
          height={windowDimension.height}
        />
      </>
    )
  }
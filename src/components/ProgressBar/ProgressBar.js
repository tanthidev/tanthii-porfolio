import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      width===100 ? clearTimeout(timer) : setWidth(parseFloat(width.toFixed(1)) + 0.1) ;
      
    }, 3);

    return () => {
      clearTimeout(timer);
    };
  }, [width]);


  return (
    <div className='h-screen flex items-center justify-center'>
      <div className="progress-bar h-1 w-1/2">
        <div className="progress-bar__fill h-1 bg-white rounded-full" style={{ width: `${width}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;

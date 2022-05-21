import React from 'react';
import './Paper.css'

const Paper = ({children}) => {
  return (
    <div className="paper">
      {children}
    </div>
  );
};

export default Paper;

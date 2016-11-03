import React from 'react';
import './index.css';

const Icon = ({ width = 35, height = 35, className, children, ...props }) => {
  return (
    <i {...props} style={{ width, height }} className={`icon ${className}`}>
      <svg style={{ width, height }} {...props} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
        {children}
      </svg>
    </i>
  );
};

Icon.displayName = 'icon';

export default Icon;

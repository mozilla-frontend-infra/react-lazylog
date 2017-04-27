import React from 'react';
import { Spinner } from './Spinner';

export const Loading = ({ style }) => (
  <Spinner style={style} />
);

Loading.defaultProps = {
  style: {
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%) translateY(-50%)'
  }
};

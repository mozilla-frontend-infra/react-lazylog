import React from 'react';
import { Spinner } from './Spinner';
import { loading } from './styles.css';

export const Loading = ({ style }) => (
  <Spinner className={loading} style={style} />
);

Loading.defaultProps = {
  style: {}
};

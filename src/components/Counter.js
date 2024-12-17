import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment5, decrement5 } from '../redux/actions';

const Counter = () => {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Счетчик: {count}</h1>
      <button onClick={() => dispatch(decrement5())} >-5</button>
      <button onClick={() => dispatch(increment5())} >+5</button>
    </div>
  );
};

export default Counter
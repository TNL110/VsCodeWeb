import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const Decrease = () => {
    setValue(value - 1);
  }

  const reset = () => {
    setValue(0)
  }

  const increase = () => {
    setValue(value + 1)
  }

  const complexIncrease = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1;
      })
    }, 2000)
  }

  return <>
    <section>
      <h1>regular counter</h1>
      <h3>{value}</h3>
      <button className='btn' type='button' onClick={Decrease}>
        descrease
      </button>
      <button className='btn' type='button' onClick={reset}>
        reset
      </button>
      <button className='btn' type='button' onClick={increase}>
        increase
      </button>
    </section>
    <section>
      <h1>more complex counter</h1>
      <h3>{value}</h3>
      <button className='btn' type = 'button' onClick = {complexIncrease}>
        increase later</button>
    </section>
  </>;
};

export default UseStateCounter;

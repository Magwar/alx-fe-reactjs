import { useState } from 'react';

import React from 'react'

function Counter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    const buttonStyle = {
        backgroundColor: 'green',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        margin: '5px'
    };
    const resetButtonStyle = {
        backgroundColor: '#f44336',
    };

  return (
      <div>
          <p>Current Count: {count}</p>
          <button style={buttonStyle} onClick={increment}> Increment </button>
          <button style={buttonStyle} onClick={decrement}> Decrementing </button>
          <button style={{...buttonStyle, ...resetButtonStyle}} onClick={reset}> Reset </button>
    </div>
  )
}

export default Counter
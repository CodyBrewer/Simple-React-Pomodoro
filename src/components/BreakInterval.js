import React, { useState } from 'react'

const BreakInterval = (props) => {
  const [breakInterval, setBreakInterval] = useState(5);

  function decreaseCounter() {
    if (breakInterval === 1) {
      return;
    } else {
      onDecreaseBreakLength();
    }
  }
  function increaseCounter() {
    if (breakInterval === 60) {
      return;
    }
    else {
      onIncreaseBreakLength()
    }
  }

  function onDecreaseBreakLength() {
    setBreakInterval(
      breakInterval - 1
    )
  }

  function onIncreaseBreakLength() {
    setBreakInterval(
      breakInterval + 1
    )
  }


  return (
    <section>
      <h4>Break Length</h4>
      <section className="interval-container">
        <button onClick={decreaseCounter}>Down</button>
        <p className="interval-length">{breakInterval}</p>
        <button onClick={increaseCounter}>Up</button>
      </section>
    </section>
  )
}

export default BreakInterval

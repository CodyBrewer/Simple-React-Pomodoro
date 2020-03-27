import React, { useState } from 'react'

const SessionLength = () => {

  const [sessionLength, setSessionLength] = useState(25)

  function decreaseCounter() {
    if (sessionLength === 1) {
      return;
    } else {
      onDecreaseSessionLength();
    }
  }
  function increaseCounter() {
    if (sessionLength === 60) {
      return;
    }
    else {
      onIncreaseSessionLength()
    }
  }

  function onDecreaseSessionLength() {
    setSessionLength(
      sessionLength - 1
    )
  }

  function onIncreaseSessionLength() {
    setSessionLength(
      sessionLength + 1
    )
  }



  return (
    <section className="">
      <h4>Session Length</h4>
      <section className="interval-container">
        <button onClick={decreaseCounter}>Down
      </button>
        <p className="interval-length">{sessionLength}</p>
        <button onClick={increaseCounter}>Up</button>
      </section>
    </section>
  )
}

export default SessionLength

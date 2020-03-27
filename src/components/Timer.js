import React, { useState } from 'react'

const Timer = (props) => {
  const { timerMinute } = props;
  const [isSession, setIsSession] = useState(true)
  const [timerSecond, setTimerSecond] = useState(0)

  return (
    <section>
      <section className="timer-container">
        <h3>{isSession === true ? "Session" : "Break"}</h3>
        <span className="timer">{timerMinute}</span>
        <span className="timer">:</span>
        <span className="timer">{timerSecond === 0
          ? "00"
          : timerMinute < 10
            ? "0" + timerSecond
            : timerSecond
        }
        </span>
      </section>
      <section className="timer-actions">
        <button>Play</button>
        <button>Stop</button>
        <button>Reset</button>
      </section>
    </section>
  )
}

export default Timer

import React, { useState } from 'react';
import './App.css';
import BreakInterval from './components/BreakInterval'
import SessionLength from './components/SessionLength';
import Timer from './components/Timer';

function App() {
  const [breakLength, setBreakLength] = useState(5)
  const [sessionLength, setSessionLength] = useState(25)
  const [timerMinute, setTimerMinute] = useState(sessionLength);

  return (
    <main>
      <h2>Pomodoro Clock</h2>
      <section className="interval-length-container">
        <BreakInterval breakInterval={breakLength} />
        <SessionLength sessionLength={sessionLength} />
      </section>
      <Timer timerMinute={timerMinute} />
    </main>
  );

}
export default App;

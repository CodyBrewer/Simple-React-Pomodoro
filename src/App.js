import React, { useState } from 'react';
import './App.css';
import BreakInterval from './components/BreakInterval'
import SessionLength from './components/SessionLength';
import Timer from './components/Timer';
import { createContext } from 'react';

function App() {

  const [timerMinute, setTimerMinute] = useState(25);

  return (
    <main>
      <h2>Pomodoro Clock</h2>
      <section className="interval-length-container">
        <BreakInterval />
        <SessionLength />
      </section>
      <Timer timerMinute={timerMinute} />
    </main>
  );

}
export default App;

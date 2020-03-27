import React, { useState } from 'react';
import './App.css';
import BreakInterval from './components/BreakInterval'
import SessionLength from './components/SessionLength';
import Timer from './components/Timer';


function App() {

  return (

    <main>
      <h2>Pomodoro Clock</h2>
      <section className="interval-length-container">
        <BreakInterval />
        <SessionLength />
      </section>
      <Timer />
    </main>

  );

}
export default App;

import React, { useState } from 'react'

export const TimerContext = React.createContext()

const Store = ({ children }) => {
  const [timerMinute, setTimerMinute] = useState(25)

  return (
    <TimerContext.Provider value={[timerMinute, setTimerMinute]}>
      {children}
    </TimerContext.Provider>
  )

}

export default Store;
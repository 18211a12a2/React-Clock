import React, { useEffect, useState } from 'react';


const App = () => {

  const [currentTime,setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    },1000);
    return () => clearInterval(timer);
  },[])


  return (
    <>
      <div className='container'>
        <span className='timer'>{currentTime.toLocaleTimeString()}</span>
      </div>
    </>
  )
}

export default App
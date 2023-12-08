import React, { useState } from "react";

const App = () => {

  const [temperatureValue, setTemperature] = useState(10)
  const [color, setColor] = useState("cold")

  const increaseTemp = () =>{
    const newTemp = temperatureValue+1
  
    if(newTemp>=22){
      setColor('hot')
    }

    setTemperature(newTemp)
  }
  
  const decreaseTemp = () =>{
    const newTemp = temperatureValue-1

    if(newTemp<22){
      setColor('cold')
    }

    setTemperature(newTemp)
  }
  

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${color}`}>{temperatureValue}°C
        </div>
      </div>
      <div className="button-container">
      <button onClick={() => {decreaseTemp()}}>-</button>
        <button onClick={() => {increaseTemp()        
        }}>+</button>
      </div>
    </div>
  )
}

export default App;
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>BMI Kalkulátor</h1>
      <h3>Ez az alkalmazás kiszámítja a testtömegindexét (BMI) a testsúlya és magassága alapján.</h3>
        <label htmlFor="magassag">Magasság (cm)
          <input type="number" id="magassag" min="0" placeholder="Adja meg a magasságát (cm)!" />
        </label>
        <br />
        <label htmlFor="suly">Testsúly (kg)
          <input type="number" id="suly" min="0" placeholder="Adja meg a testsúlyát (kg)!" />
        </label>
                <br />

        <input type="submit" id="gomb" value="Elküldés" />
                <br />
      <div id="messageLogger"></div>
    </>
  )
}

export default App

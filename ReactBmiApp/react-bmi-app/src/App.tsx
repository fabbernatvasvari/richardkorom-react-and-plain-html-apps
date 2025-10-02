import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [magassag, setMagassag] = useState<number | null>(null);
  const [suly, setSuly] = useState<number | null>(null);
  const [eredmeny, setEredmeny] = useState<string>("");

  function handleClick() {
    if (magassag === null || suly === null) {
      setEredmeny("Kérem, adja meg a magasságát és a testsúlyát!");
      return;
    }
    if (magassag <= 0 || suly <= 0) {
      setEredmeny("A magasságnak és a testsúlynak nagyobbnak kell lennie nullánál!");
      return;
    }
    const bmi = suly / ((magassag / 100) * (magassag / 100));
    setEredmeny(`Az Ön testtömegindexe (BMI): ${bmi.toFixed(2)}`);
  }
  return (
    <>
      <h1>BMI Kalkulátor</h1>
      <h3>Ez az alkalmazás kiszámítja a testtömegindexét (BMI) a testsúlya és magassága alapján.</h3>
        <label htmlFor="magassag">Magasság (cm)
          <input type="number" onChange={e => setMagassag(Number(e.target.value))} id="magassag" min="0" placeholder="Adja meg a magasságát (cm)!" />
        </label>
        <br />
        <label htmlFor="suly">Testsúly (kg)
          <input type="number" onChange={e => setSuly(Number(e.target.value))} id="suly" min="0" placeholder="Adja meg a testsúlyát (kg)!" />
        </label>
        <br />
        <input type="submit" id="gomb" value="Elküldés" onClick={() => handleClick()}  />
        <br />
      <div>{eredmeny}</div>
    </>
  )
}

export default App

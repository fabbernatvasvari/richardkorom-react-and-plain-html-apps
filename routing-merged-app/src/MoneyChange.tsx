import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [amount, setAmount] = useState<number | null>(null);
  const [operation, setOperation] = useState<string>("euro");
  const [eredmeny, setEredmeny] = useState<string>("");

  async function handleClick() {
    if (amount === null) {
      setEredmeny("Kérem, adja meg az összeget!");
      return;
    }

    if (operation === "euro") {
      const rate = 1 / 380;
      const convertedAmount = amount * rate;
      setEredmeny(`Átváltott összeg: ${convertedAmount.toFixed(2)} €`);
    } else if (operation === "dollar") {
      const rate = 1 / 350;
      const convertedAmount = amount * rate;
      setEredmeny(`Átváltott összeg: ${convertedAmount.toFixed(2)} $`);
    } else {
      setEredmeny("Érvénytelen művelet!");
    }
  }

  return (
    <>
      
      <div className="card">
        


        <h1>Pénzváltó</h1>
        <h3>Ez egy pénzváltó weboldal, amellyel az aktuális árfolyam alapján átválthatja az összeget forintból euróra vagy
          dollárra.</h3>

        <span>
          <label htmlFor="osszeg">Pénzösszeg (HUF)
            <input type="number" defaultValue={0} id="osszeg" placeholder="Adja meg az összeget (forintban)!" onChange={e => setAmount(Number(e.target.value))} />
          </label>
          <br />

          <select id="valuta" onChange={e => setOperation(e.target.value)}>
            <option value="euro">Euró(€)</option>
            <option value="dollar">Dollár ($)</option>
          </select>
          <br />

          <input type="submit" id="gomb" onClick={() => handleClick()} value="Átváltás" />
        </span>
        <div>{eredmeny}</div>

        <div id="messageLogger"></div>











      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

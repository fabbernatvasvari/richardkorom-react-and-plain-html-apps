import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [amount, setAmount] = useState<number | null>(null);
  const [operation, setOperation] = useState<string>("euro");
  const [eredmeny, setEredmeny] = useState<string>("");
  const Celsius = amount || 0;
  const Kelvin = Celsius + 273.15;
  const Fahrenheit = Celsius * 1.8 + 32;

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
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>


        <h1>Hőmérséklet átváltó</h1>
    <h3>Ez egy hőmérséklet átváltó weboldal, amely Celsiusból Fahrenheitre és Kelvinre is átváltja a megadott értéket.</h3>
           <header>Adja meg a Celsius hőmérsékletet:</header>


        <span>
          <label htmlFor="homerseklet">Hőmérséklet (°C)
            <input type="number" defaultValue={0} id="homerseklet" placeholder="Adja meg a hőmérsékletet!" onChange={e => setAmount(Number(e.target.value))} />
          </label>
          <br />
          <div>{Celsius} &deg;C = {Kelvin.toFixed(2)} K</div>
        <div>{Celsius} &deg;C = {Fahrenheit.toFixed(2)} &deg;F</div>
        <br />

          <input type="submit" id="gomb" onClick={() => handleClick()} value="Számítás" />
        </span>
        <div>{eredmeny}</div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

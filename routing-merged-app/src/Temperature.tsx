import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [degree, setDegree] = useState<number | null>(null);
  const [eredmeny, setEredmeny] = useState<string>("");
  const Celsius = degree ?? 0;
  const Kelvin = Celsius + 273.15;
  const Fahrenheit = Celsius * 1.8 + 32;

  async function handleClick() {
  if (degree === null) {
    setEredmeny("Kérem, adja meg az összeget!");
    return;
  }
  if (degree <= -273.15) {
    setEredmeny("A hőmérséklet nem lehet -273.15 °C-nál alacsonyabb. Az fizikai lehetetlenség!");
    return;
  }
  setEredmeny(`Számítás sikeres: ${degree} °C átváltva.`);
}

  return (
    <>
      <div className="card">
        <h1>Hőmérséklet átváltó</h1>
        <h3>Ez egy hőmérséklet átváltó weboldal, amely Celsiusból Fahrenheitre és Kelvinre is átváltja a megadott értéket.</h3>
        <header>Adja meg a Celsius hőmérsékletet:</header>


        <span>
          <label htmlFor="homerseklet">Hőmérséklet (°C)
            <input type="number"
              defaultValue={0}
              id="degree"
              placeholder="Adja meg a hőmérsékletet!"
              onChange={e => setDegree(Number(e.target.value))} />
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

export default App;

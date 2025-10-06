import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  function add(a: number, b: number): number {
    return a + b;
  }

  function subtract(a: number, b: number): number {
    return a - b;
  }

  function multiply(a: number, b: number): number {
    return a * b;
  }

  function divide(a: number, b: number): number {
    return a / b;
  }

  const [a, setA] = useState<number | null>(null);
  const [b, setB] = useState<number | null>(null);

  const [operation, setOperation] = useState<string>("add");
  const [eredmeny, setEredmeny] = useState<string>("");
  function handleClick() {

    if (a === null || b === null) {
      setEredmeny("Kérem, adjon meg két számot!");
      return;
    }
    if (operation === "divide" && b === 0) {
      setEredmeny("Nullával való osztás nem lehetséges!");
      return;
    }
    if (operation === "add") {
      setEredmeny(`Eredmény: ${add(a, b)}`);
    } else if (operation === "subtract") {
      setEredmeny(`Eredmény: ${subtract(a, b)}`);
    } else if (operation === "multiply") {
      setEredmeny(`Eredmény: ${multiply(a, b)}`);
    } else if (operation === "divide") {
      setEredmeny(`Eredmény: ${divide(a, b)}`);
    } else {
      setEredmeny("Érvénytelen művelet!");
    }
  }

  return (
    <>
      <div>
        <h1>Számológép</h1>
        <h3>Ez egy számológép weboldal, amellyel a 4 alapműveletet lehet elvégezni 2 tetszőleges számon.</h3>

        <br />
        <div>
          <label htmlFor="elsoszam">
            Első szám
            <input type="number" onChange={e => setA(Number(e.target.value))} />
          </label>
          <br />
          <select name="operation" id="operation" onChange={e => setOperation(e.target.value)}>
            <option value="add">+</option>
            <option value="subtract">-</option>
            <option value="multiply">*</option>
            <option value="divide">/</option>
          </select>
          <br />
          <label htmlFor="masodikszam">
            Második szám
            <input type="number" onChange={e => setB(Number(e.target.value))} />
          </label>
          <br />
          <input type="submit" id="gomb" value="Elküldés" onClick={() => handleClick()} />
          <div>{eredmeny}</div>
        </div>
      </div>

    </>
  )
}

export default App

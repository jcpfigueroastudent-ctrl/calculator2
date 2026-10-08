import './App.css'
import { useState } from 'react'

function CalcDisplay({ disp }) {
  return (
    <div className='CalcDisplay' style={{ fontSize: '22px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
      {disp}
    </div>
  )
}

function CalcButton({ label, buttonClassName = 'CalcButton', onClick, disabled = false, style }) {
  return (
    <button className={buttonClassName} onClick={onClick} disabled={disabled} style={style}>
      {label}
    </button>
  )
}

function App() {
  const [disp, setDisp] = useState(0);
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [op, setOp] = useState(null);

  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if (op === null) {
      const nextNum1 = num1 === null ? value : num1 + value;
      setNum1(nextNum1);
      setDisp(nextNum1);
    } else {
      const nextNum2 = num2 === null ? value : num2 + value;
      setNum2(nextNum2);
      setDisp(nextNum2);
    }
  }

  const opClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    if (num1 !== null) {
      setOp(value);
      setDisp(value);
    }
  }

  const eqClickHandler = (e) => {
    e.preventDefault();

    if (num1 !== null && num2 !== null && op !== null) {
      const n1 = parseFloat(num1);
      const n2 = parseFloat(num2);
      let result = 0;

      if (op === '+') result = n1 + n2;
      if (op === '-') result = n1 - n2;
      if (op === '*') result = n1 * n2;
      if (op === '÷') result = n2 !== 0 ? n1 / n2 : 'Error';

      setDisp(result);
      setNum1(result.toString());
      setNum2(null);
      setOp(null);
    }
  }

  const clrClickHandler = (e) => {
    e.preventDefault();
    setDisp(0);
    setNum1(null);
    setNum2(null);
    setOp(null);
  }

  const nameClickHandler = (e) => {
    e.preventDefault();
    setDisp('JOSHUA FIGUEROA');
  }

  return (
    <div className='App'>
      <div className='Header'>
        Calculator of Joshua Figueroa - DA3A
      </div>
      <div className='Calculator'>
        <CalcDisplay disp={disp} />
        <div className='CalcButtons'>
          <CalcButton label={'7'} onClick={numClickHandler} />
          <CalcButton label={'8'} onClick={numClickHandler} />
          <CalcButton label={'9'} onClick={numClickHandler} />
          <CalcButton label={'÷'} onClick={opClickHandler} />
          <CalcButton label={'4'} onClick={numClickHandler} />
          <CalcButton label={'5'} onClick={numClickHandler} />
          <CalcButton label={'6'} onClick={numClickHandler} />
          <CalcButton label={'*'} onClick={opClickHandler} />
          <CalcButton label={'1'} onClick={numClickHandler} />
          <CalcButton label={'2'} onClick={numClickHandler} />
          <CalcButton label={'3'} onClick={numClickHandler} />
          <CalcButton label={'-'} onClick={opClickHandler} />
          <CalcButton label={'C'} buttonClassName={"ClearButton"} onClick={clrClickHandler} />
          <CalcButton label={'0'} onClick={numClickHandler} />
          <CalcButton label={'='} onClick={eqClickHandler} />
          <CalcButton label={'+'} onClick={opClickHandler} />
          <CalcButton label={'FIGUEROA'} onClick={nameClickHandler} style={{ fontSize: '10px', padding: '2px' }} />
        </div>
      </div>
    </div>
  )
}

export default App
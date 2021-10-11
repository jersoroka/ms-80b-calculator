import './App.css';
import { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header'
import { Screen } from './components/Screen'
import { ButtonGrid } from './components/ButtonGrid';
import { Top } from './components/Top';

function App() {
  const [input, setInput] = useState(null);
  const [negative, setNegative] = useState(false);
  const [currency, setCurrency] = useState(null);
  const [exchange, setExchange] = useState(false);
  const [operator, setOperator] = useState(null);
  const [firstNumber, setFirstNumber] = useState(null);
  const [secondNumber, setSecondNumber] = useState(null);
  const [toggleEquals, setToggleEquals] = useState(null);
  const inputRef = useRef(0);
  const secondNumberRef = useRef(null);

  inputRef.current = input;
  secondNumberRef.current = secondNumber;

  useEffect(() => {
    if (toggleEquals && firstNumber && input) {
      console.log("second number current: ", secondNumberRef.current)
      setInput(calculate());
      setToggleEquals(false);
      setFirstNumber(null);
      setOperator(null);
    } 
  }, [toggleEquals])

  useEffect(() => {
    if (operator && !firstNumber) {
      setFirstNumber(input);
      setInput(null);
    }
  }, [operator])

  const appendInput = async (value) => {
    // the operator has just been pressed
    if (operator && firstNumber && !secondNumber) {
      await setInput(null);
    }

    if (inputRef.current === null) {
      await setInput(value);
    } else {
      await setInput(input + "" + value);
    }

    if (operator) {
      await setSecondNumber(inputRef.current)
    } else {
      await setFirstNumber(inputRef.current)
    }
  }

  const calculate = () => {
    const firstNumberAsFloat = parseFloat(firstNumber);
    const secondNumberAsFloat = parseFloat(secondNumberRef.current);
    console.log("first number as float ", firstNumberAsFloat);
    console.log("second number as float: ", secondNumberAsFloat);
    console.log("operator: ", operator)


    switch (operator) {
      case 'add': {
        return firstNumberAsFloat + secondNumberAsFloat;
      }
      case 'minus': {
        return firstNumberAsFloat - secondNumberAsFloat;
      }
      case 'times': {
        return firstNumberAsFloat * secondNumberAsFloat;
      }
      case 'divide': {
        return firstNumberAsFloat / secondNumberAsFloat;
      }
      default: {
        return null;
      }
    }
  }

  return (
    <div className="app">
      <div className="app__calculator">
        <Top />
        <Header />
        <Screen 
          currency={currency} 
          exchange={exchange} 
          input={input}  
          negative={negative}
          operator={operator}/>
        <ButtonGrid 
          appendInput={appendInput} 
          setOperatorRoutine={setOperator} 
          setNegative={setNegative} 
          setToggleEquals={setToggleEquals}/>
      </div>
    </div>
  );
}

export default App;

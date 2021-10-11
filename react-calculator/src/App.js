import './App.css';
import { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header'
import { Screen } from './components/Screen'
import { ButtonGrid } from './components/ButtonGrid';
import { Top } from './components/Top';

function App() {
  const [input, setInput] = useState(null);
  const [negative, setNegative] = useState(false);
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

      const total = format(calculate());
      
      setInput(total);
      setToggleEquals(false);
      setFirstNumber(null);
      setOperator(null);
    } 
  }, [toggleEquals])

  useEffect(() => {
    if (operator === 'square-root') {
      setFirstNumber(input);
      setSecondNumber(input);
      setToggleEquals(true);
    } else if (operator && !firstNumber) {
      setFirstNumber(input);
      setInput(null);
    }

    setNegative(false);
  }, [operator])

  const allClear = () => {
    clear();
    setNegative(false);
  }

  const appendInput = async (value) => {
    if (operator && firstNumber && !secondNumber) {
      await setInput(null);
      await setNegative(false);
    }

    if (!operator && !firstNumber) {
      await setInput(null);
      await setSecondNumber(null);
    }

    if (inputRef.current === null && !negative) {
      await setInput(value);
    } else if (inputRef.current === null && negative) {
      await setInput("-" + "" + value);
    } else if (inputRef.current.toString().length < 8){
      await setInput(input + "" + value);
    }

    if (operator) {
      await setSecondNumber(inputRef.current)
    } else {
      await setFirstNumber(inputRef.current)
    }
  }

  const clear = () => {
    setFirstNumber(null);
    setSecondNumber(null);
    setInput(null);
    setOperator(null);
    setToggleEquals(false);
  }

  const calculate = () => {
    const firstNumberAsFloat = parseFloat(firstNumber);
    const secondNumberAsFloat = parseFloat(secondNumberRef.current);

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
      case 'square-root': {
        return Math.sqrt(firstNumberAsFloat);
      }
      default: {
        return null;
      }
    }
  }

  const format = (total) => {
    if (total.toString().length > 8) {
      const length = total.toExponential().length;
      return total.toExponential(length > 5 ? 5 : length);
    }
    return total;
  }

  const toggleNegative = () => {
    setNegative(!negative);
  }

  return (
      <div className="app">
        <div className="app__calculator">
          <Top />
          <Header />
          <Screen 
            input={input}  
            negative={negative}
            operator={operator}/>
          <ButtonGrid
            allClear={allClear} 
            appendInput={appendInput}
            clear={clear} 
            setOperator={setOperator}  
            setToggleEquals={setToggleEquals}
            toggleNegative={toggleNegative}/>
        </div>
      </div>
  );
}

export default App;

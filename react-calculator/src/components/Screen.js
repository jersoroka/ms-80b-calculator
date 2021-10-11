import React from 'react'
import "./Screen.css"
import { FaDivide, FaMinus, FaPlus, FaTimes } from 'react-icons/fa'

export const Screen = ({ currency, exchange, input, operator, negative }) => {

    var operatorSymbol = null;
    
    switch (operator) {
        case 'plus': {
            operatorSymbol = <FaPlus/>;
            break;
        }
        case 'minus': {
            operatorSymbol = <FaMinus/>;
            break;
        }
        case 'times': {
            operatorSymbol = <FaTimes/>;
            break;
        }
        case 'divide': {
            operatorSymbol = <FaDivide/>;
            break;
        }
        default:
            operatorSymbol = null;
            break;
    }

    return (
        <div className="screen">
            <span className="screen__negative screen__text">{!negative && <FaMinus/>}</span>
            <span className="screen__operator screen__text">{operatorSymbol}</span>
            <span className="screen__number-display">{input}</span>
        </div>
    )
}

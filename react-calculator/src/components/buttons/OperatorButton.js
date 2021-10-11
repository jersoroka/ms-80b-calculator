import React from 'react'
import "./Button.css"

export const OperatorButton = ({ argument, setOperator, text }) => {

    if (argument === "add") {
        return (
            <div className="button__container button__add-container">
                <button onClick={() => setOperator(argument)}>{text}</button>
            </div>
        )
    }

    return (
        <div className="button__container button__main-container">
            <button className="grey" onClick={() => setOperator(argument)}>{text}</button>
        </div>
    )
}

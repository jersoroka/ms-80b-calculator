import React from 'react'
import './Button.css'

export const EqualsButton = ({ setToggleEquals }) => {

    return (
        <div className="button__container button__main-container">
            <button className="dark-grey" onClick={() => setToggleEquals(true)}>=</button>
        </div>
    )
}

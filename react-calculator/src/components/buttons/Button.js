import React from 'react'
import "./Button.css"

export const Button = ({ colour, text, location, handleClick }) => {

    return (
        <div className={"button__container " + (location ==="top" ? "button__top-container" : "button__main-container")}>
            <button
                className={colour}
                onClick={handleClick}
            >{text}</button>
        </div>
    )
}

import React from 'react'
import "./Button.css"

export const Button = ({ isAdd, colour, text, location, handleClick, handleToggle }) => {

    if (isAdd) {
        return (
            <div className="button__container button__add-container">
                <button>{text}</button>
            </div>
        )
    }

    return (
        <div className={"button__container " + (location ==="top" ? "button__top-container" : "button__main-container")}>
            <button
                className={colour}
            >{text}</button>
        </div>
    )
}

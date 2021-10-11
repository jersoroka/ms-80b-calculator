import React from 'react'
import "./ButtonGrid.css"
import { Button } from './buttons/Button'
import { EqualsButton } from './buttons/EqualsButton'
import { InputButton } from './buttons/InputButton'
import { OperatorButton } from './buttons/OperatorButton'
import { FaDivide, FaMinus, FaPlay, FaPlus, FaSquareRootAlt, FaTimes } from 'react-icons/fa'

export const ButtonGrid = ({ allClear, appendInput, clear, setToggleEquals, setOperator, toggleNegative}) => {

    return (
        <div className="button-grid">
            <div className="button-grid__divider"></div>
            <div className="button-grid__container">

                {/* row 1 - text row */}
                <span/> <span/> <span/> <span/> <span/> <span/> <span/> <span className="button-grid__label">TAX RATE</span>

                {/* row 2 */}
                <span/>
                <Button colour="grey" location="top" text="OFF"/>
                <span/>
                <OperatorButton argument="square-root" location="top" setOperator={setOperator} text={<FaSquareRootAlt/>}/>
                <Button colour="grey" location="top" text={<FaPlay/>}/>
                <Button colour="blue" location="top" text="TAX-"/>
                <span/>
                <Button colour="blue" location="top" text="TAX+"/>

                {/* row 3 - text row */}
                <span/><span className="button-grid__label">C3</span> <span/> <span className="button-grid__label">C2</span> <span className="button-grid__label">C1</span> <span/> <span/> <span/>

                {/* row 4 */}
                <span/>
                <Button colour="grey" location="main" text="MRC"/>
                <span/>
                <Button colour="grey" location="main" text="M-"/>
                <Button colour="grey" location="main" text="M+"/>
                <Button colour="grey" location="main" text="%"/>
                <span/>
                <OperatorButton argument="divide" setOperator={setOperator} text={<FaDivide/>}/>

                {/* row 5 */}
                <span/>
                <Button colour="grey" location="main" text="M/EX"/>
                <span/>
                <InputButton colour="dark-grey" appendInput={appendInput} location="main" text="7"/>
                <InputButton colour="dark-grey" appendInput={appendInput} location="main" text="8"/>
                <InputButton colour="dark-grey" appendInput={appendInput} location="main" text="9"/>
                <span/>
                <OperatorButton argument="times" setOperator={setOperator} text={<FaTimes/>}/>

                {/* row 6 */}
                <span/>
                <Button colour="grey" handleClick={toggleNegative} location="main" text="+/-"/>
                <span/>
                <InputButton colour="dark-grey" appendInput={appendInput} location="main" text="4"/>
                <InputButton colour="dark-grey" appendInput={appendInput} location="main" text="5"/>
                <InputButton colour="dark-grey" appendInput={appendInput} location="main" text="6"/>
                <span/>
                <OperatorButton argument="minus" setOperator={setOperator} text={<FaMinus/>}/>

                {/* row 7 */}
                <span/>
                <Button colour="orange" handleClick={clear} location="main" text="C"/>
                <span/>
                <InputButton colour="dark-grey" appendInput={appendInput} location="main" text="1"/>
                <InputButton colour="dark-grey" appendInput={appendInput} location="main" text="2"/>
                <InputButton colour="dark-grey" appendInput={appendInput} location="main" text="3"/>
                <span/>
                <OperatorButton argument="add" setOperator={setOperator} text={<FaPlus/>}/>

                {/* row 8 */}
                <span className="button-grid__label button-grid__label-side">ON</span>
                {/* <span/> */}
                <Button colour="orange" handleClick={allClear} location="main" text="AC"/>
                <span/>
                <InputButton colour="dark-grey" appendInput={appendInput} text="0"/>
                <InputButton colour="dark-grey" appendInput={appendInput} location="main" text="."/>
                <EqualsButton setToggleEquals={setToggleEquals}/>
            </div>
            <div className="button-grid__base"></div>
        </div>
    )
}

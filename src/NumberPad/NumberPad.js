import React, { useState } from 'react'
import Button from "../Button/Button"
import Output from "../Output/Output";

const NumberPad = () => {

    const [result, setResult] = useState('')
    const backSpace = () => {
    }
    const onClick = (value) => {
        setResult(value)
    }

    return (
        <div>
            <Output label={result} />
            <div>
                <Button onClick={onClick} label={['1']} />
                <Button onClick={onClick} label={['2', 'A', 'B', 'C']} />
                <Button onClick={onClick} label={['3', 'D', 'E', 'F']} />
            </div>
            <div>
                <Button onClick={onClick} label={['4', 'G', 'H', 'I']} />
                <Button onClick={onClick} label={['5', 'J', 'K', 'L']} />
                <Button onClick={onClick} label={['6', 'M', 'N', 'O']} />
            </div>
            <div>
                <Button onClick={onClick} label={['7', 'P', 'Q', 'R', 'S']} />
                <Button onClick={onClick} label={['8', 'T', 'U', 'V']} />
                <Button onClick={onClick} label={['9', 'W', 'X', 'Y', 'Z']} />
            </div>
            <div>
                <Button onClick={onClick} label={['*']} />
                <Button onClick={onClick} label={['0', '+']} />
                <Button onClick={onClick} label={['#']} />
            </div>
            <div><Button onClick={backSpace} label={['⌫']} /></div>
        </div>
    )
}

export default NumberPad

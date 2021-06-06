import React, { useState } from 'react'
import Button from "./Button/Button"
import Output from "../Output/Output";

const NumberPad = () => {

    const [result, setResult] = useState('')
    const [capitalise, setCapitalise] = useState(true)

    const backSpace = () => {
        setResult(result.slice(0, -1))
    }

    const hash = () => {
        setCapitalise(!capitalise)
    }

    const onClick = (value) => {
        if (capitalise) {
            value = value.toLowerCase()
        } else {
            value = value.toUpperCase()
        }
        const upDatedValue = `${result}${value}`
        setResult(upDatedValue)
    }

    return (
        <div>
            <Output label={result} />
            <div>
                <Button onClick={onClick} label={['1']} />
                <Button onClick={onClick} label={['A', 'B', 'C', '2']} />
                <Button onClick={onClick} label={['D', 'E', 'F', '3']} />
            </div>
            <div>
                <Button onClick={onClick} label={['G', 'H', 'I', '4']} />
                <Button onClick={onClick} label={['J', 'K', 'L', '5']} />
                <Button onClick={onClick} label={['M', 'N', 'O', '6']} />
            </div>
            <div>
                <Button onClick={onClick} label={['P', 'Q', 'R', 'S', '7']} />
                <Button onClick={onClick} label={['T', 'U', 'V', '8']} />
                <Button onClick={onClick} label={['W', 'X', 'Y', 'Z', '9']} />
            </div>
            <div>
                <Button onClick={onClick} label={['*']} />
                <Button onClick={onClick} label={['+', '0']} />
                <Button onClick={hash} label={['#']} />
            </div>
            <div><Button onClick={backSpace} label={['⌫']} /></div>
        </div>
    )
}

export default NumberPad

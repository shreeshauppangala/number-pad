import React, { useState } from 'react'
import Button from "./Button/Button"
import Output from "../Display/Display";

const NumberPad = () => {

    const [result, setResult] = useState('')
    const [capitalise, setCapitalise] = useState(true)

    const backSpace = () => {
        setResult(result.slice(0, -1))
    }

    const capital = () => {
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
                <Button onClick={onClick} label={['𝟏', '.', ',', '?']} />
                <Button onClick={onClick} label={['𝟐', 'a', 'b', 'c']} />
                <Button onClick={onClick} label={['𝟑', 'd', 'e', 'f']} />
            </div>
            <div>
                <Button onClick={onClick} label={['𝟒', 'g', 'h', 'i']} />
                <Button onClick={onClick} label={['𝟓', 'j', 'k', 'l']} />
                <Button onClick={onClick} label={['𝟔', 'm', 'n', 'o']} />
            </div>
            <div>
                <Button onClick={onClick} label={['𝟕', 'p', 'q', 'r', 's']} />
                <Button onClick={onClick} label={['𝟖', 't', 'u', 'v']} />
                <Button onClick={onClick} label={['𝟗', 'w', 'x', 'y', 'z']} />
            </div>
            <div>
                <Button onClick={onClick} label={['*']} />
                <Button onClick={onClick} label={['𝟎', '+']} />
                <Button onClick={onClick} label={['#']} />
            </div>
            <div>
                <Button onClick={backSpace} label={['⌫']} />
                <Button onClick={onClick} label={[' ','␣']} />
                <Button onClick={capital} label={['⇧']} />
            </div>
        </div>
    )
}

export default NumberPad

import React, { useState } from 'react'
import Button from "./Button/Button"
import Display from "../Display/Display"
import './NumberPad.css'

const NumberPad = () => {

    const [result, setResult] = useState('')
    const [capitalise, setCapitalise] = useState(true)

    const bkSpace = () => setResult(result.slice(0, -1))
    const backSpace = (e) => {
        if (e.keyCode === 8) {
            setResult(result.slice(0, -1))
        }
    }


    window.addEventListener('keydown', (event) => {
        setCapitalise(event.getModifierState && event.getModifierState('CapsLock'))
    })
    const capital = () => setCapitalise(!capitalise)


    const onChange = (value) => setResult(value.target.value)

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
            <Display content={result} onChange={onChange} />
            <div className='btn'>
                <Button onClick={onClick} digit={['1']} label={['.', ',']} />
                <Button onClick={onClick} digit={['2']} label={['a', 'b', 'c']} />
                <Button onClick={onClick} digit={['3']} label={['d', 'e', 'f']} />
            </div>
            <div className='btn'>
                <Button onClick={onClick} digit={['4']} label={['g', 'h', 'i']} />
                <Button onClick={onClick} digit={['5']} label={['j', 'k', 'l']} />
                <Button onClick={onClick} digit={['6']} label={['m', 'n', 'o']} />
            </div>
            <div className='btn'>
                <Button onClick={onClick} digit={['7']} label={['p', 'q', 'r', 's']} />
                <Button onClick={onClick} digit={['8']} label={['t', 'u', 'v']} />
                <Button onClick={onClick} digit={['9']} label={['w', 'x', 'y', 'z']} />
            </div>
            <div className='btn'>
                <Button onClick={onClick} label={['*']} />
                <Button onClick={onClick} digit={['0']} label={['+']} />
                <Button onClick={onClick} label={['#']} />
            </div>
            <div className='btn'>
                <Button onClick={bkSpace} onKeyDown={backSpace} label={['⌫']} />
                <Button onClick={onClick} label={[' ', '␣']} />
                <Button onClick={capital} label={['⇧']} />
            </div>
        </div>
    )
}

export default NumberPad

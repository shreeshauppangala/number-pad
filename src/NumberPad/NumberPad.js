import React, { useState, /*useCallback*/ } from 'react'
import { useLongPress } from 'use-long-press'
import Button from "./Button/Button"
import Output from "../Display/Display"
import './NumberPad.css'

const NumberPad = () => {

    const [result, setResult] = useState('')
    const [capitalise, setCapitalise] = useState(true)

    // const enabled = true

    // const callback = useCallback(() => {
    //     console.log("Long pressed!")

    // }, []);

    const numbers = useLongPress( () => /*enabled ? callback : null,*/ {
        console.log("Long pressed!")
        // threshold: 1000,
    });

    // const longPress = (e) => {
    //     e.target.setAttribute('data-editing','true')
    //     console.log('long press')
    // }

    const backSpace = () => {
        setResult(result.slice(0,-1))
        // selectionStart
    }

    const capital = () => {
        setCapitalise(!capitalise)
    }

    // const capsLock = (event) => {
    //     if(event.keyCode === 20) {
    //         setCapitalise(!capitalise)
    //     }
    // }

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
            <Output content={result} />
            <button {...numbers} digit={[1]}>Press me</button>
            <div className='btn'>
                <Button onClick={onClick} /*onKeyPress={97}*/ {...numbers} digit={[1]} label={['.', ',', '?', '!']} />
                <Button onClick={onClick} /*onKeyPress={98}*/ {...numbers} digit={[2]} label={['a', 'b', 'c']} />
                <Button onClick={onClick} /*onKeyPress={99}*/ {...numbers} digit={[3]} label={['d', 'e', 'f']} />
            </div>
            <div className='btn'>
                <Button onClick={onClick} /*onKeyPress={100}*/ {...numbers} digit={[4]} label={['g', 'h', 'i']} />
                <Button onClick={onClick} /*onKeyPress={101}*/ {...numbers} digit={[5]} label={['j', 'k', 'l']} />
                <Button onClick={onClick} /*onKeyPress={102}*/ {...numbers} digit={[6]} label={['m', 'n', 'o']} />
            </div>
            <div className='btn'>
                <Button onClick={onClick} /*onKeyPress={103}*/ {...numbers} digit={[7]} label={['p', 'q', 'r', 's']} />
                <Button onClick={onClick} /*onKeyPress={104}*/ {...numbers} digit={[8]} label={['t', 'u', 'v']} />
                <Button onClick={onClick} /*onKeyPress={105}*/ {...numbers} digit={[9]} label={['w', 'x', 'y', 'z']} />
            </div>
            <div className='btn'>
                <Button onClick={onClick} /*onKeyPress={106}*/ label={['*']} />
                <Button onClick={onClick} /*onKeyPress={96}*/ {...numbers} digit={[0]} label={['+']} />
                <Button onClick={onClick} /*onKeyPress={51}*/ label={['#']} />
            </div>
            <div className='btn'>
                <Button onClick={backSpace} /*onKeyPress={8}*/ label={['⌫']} />
                <Button onClick={onClick} /*onKeyPress={32}*/ label={[' ', '␣']} />
                <Button onClick={capital} /*onKeyPress={capsLock}*/ label={['⇧']} />
            </div>
        </div>
    )
}

export default NumberPad

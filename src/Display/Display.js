import React, { useRef } from 'react';
import './Display.css'

const Display = (props) => {

    const inputRef = useRef()
    const onBlur = () => inputRef.current.focus()

    return <input
        autoFocus
        className='Display'
        type="text"
        value={props.content}
        onChange={props.onChange}
        ref={inputRef}
        onBlur={onBlur}
    />
}

export default Display;
import React from 'react';
import './Display.css'

const Display = (props) => {

    return <textarea className='Display' type="tel" autoFocus defaultValue={props.content} />
}

export default Display;
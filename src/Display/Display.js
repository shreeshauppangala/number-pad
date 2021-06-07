import React from 'react';
import './Display.css'

const Display = (props) => {

    return <input className='Display' type="tel" readOnly={true} value={props.label} />
}

export default Display;

import React from 'react';
import './Output.css'

const Output = (props) => {
    return <input className='Output' type="tel" readOnly value={props.label} />
}
export default Output;

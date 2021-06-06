import React from 'react';
import './Output.css'

const Output = (props) => {
    return <input className='Output' type="tel" readOnly={true} value={props.label} />
}
export default Output;

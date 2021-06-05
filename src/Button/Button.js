import React, { /*useState,useEffect*/ } from 'react';
import './Button.css'

const Button = (props) => {
    // const [timeOutflag, setTimeOutFlag] = useState(false)
    // const [defaultValue, setDefaultValue] = useState(props.label[0])


    // setTimeout(() => {
    //     setTimeOutFlag(true);
    // }, 300);

    // const value = () => {
    //     setDefaultValue(+1)
    // }

    const onClick = (event) => {
        props.onClick(event.target.value)
    }

    return <input onClick={onClick} type="button" value={props.label.join('').toString()} />
}
export default Button;



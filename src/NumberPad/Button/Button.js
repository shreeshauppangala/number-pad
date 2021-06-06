import React, { useState, useRef } from 'react';
import './Button.css'

const Button = (props) => {

    let [nextItem, setNextItem] = useState(0)
    const [timeOutflag, setTimeOutFlag] = useState(false)
    const nextItemRef = useRef(nextItem)
    nextItemRef.current = nextItem
    let cusorPosition = nextItem + 1


    const onClick = () => {
        const keyTimout = setTimeout(() => {
            setTimeOutFlag(true);
            props.onClick(props.label[nextItemRef.current - 1])
            setNextItem(0)
        }, 1000);

        if (!timeOutflag && nextItemRef.current > 0) {
            clearTimeout(keyTimout)
        } else if (timeOutflag) {
            setTimeOutFlag(false)
        }

        if (props.label.length >= cusorPosition) {
            setNextItem(nextItem + 1)
        } else if (cusorPosition === props.label.length) {
            setNextItem(0)
        }
    }

    return <input onClick={onClick} type="button" value={props.label.join('').toString()} />
}

export default Button;
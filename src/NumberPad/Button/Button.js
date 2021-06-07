import React, { useState, useRef } from 'react';
import './Button.css'

const Button = (props) => {

    let [nextItem, setNextItem] = useState(0)
    const [timeOutflag, setTimeOutFlag] = useState(false)
    const nextItemRef = useRef(nextItem)
    let currentPosition = nextItem + 1
    nextItemRef.current = nextItem


    const onClick = () => {

        const keyTimout = setTimeout(() => {
            setTimeOutFlag(true);
            props.onClick(props.label[nextItemRef.current - 1])
            setNextItem(0)
        }, 700);

        if (!timeOutflag && nextItemRef.current > 0) {
            clearTimeout(keyTimout)
        } else if (timeOutflag) {
            setTimeOutFlag(false)
        }

        if (props.label.length >= currentPosition) {
            setNextItem(nextItem + 1)
        } else if (currentPosition === props.label.length) {
            setNextItem(0)
        }
    }

    return <input onClick={onClick} type="button" value={props.label.join('').toString()} />
}

export default Button;
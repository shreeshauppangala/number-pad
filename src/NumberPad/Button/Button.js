import React, { useState, useRef } from 'react';
import './Button.css'

const Button = (props) => {

    let [nextItem, setNextItem] = useState(0)
    const [timeOutflag, setTimeOutFlag] = useState(false)

    const nextItemRef = useRef(nextItem)

    let content = props.label.concat(props.digit)

    let caretPosition = nextItem + 1
    nextItemRef.current = nextItem


    const onClick = () => {

        const keyTimout = setTimeout(() => {
            setTimeOutFlag(true);
            props.onClick(props.label[nextItemRef.current - 1])
            setNextItem(0)
        }, 500);

        if (!timeOutflag && nextItemRef.current > 0) {
            clearTimeout(keyTimout)
        } else if (timeOutflag) {
            setTimeOutFlag(false)
        }

        if (props.label.length >= caretPosition) {
            setNextItem(nextItem + 1)
        } else if (caretPosition === props.label.length) {
            setNextItem(0)
        }
    }

    return <input onClick={onClick} type="button" value={content.join('').toString()} />
}

export default Button;
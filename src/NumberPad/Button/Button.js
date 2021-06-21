import React, { useState, useRef, useCallback } from 'react';
import { useLongPress } from 'use-long-press'
import './Button.css'

const Button = (props) => {


    let [nextItem, setNextItem] = useState(0)
    const [timeOver, setTimeOver] = useState(false)
    const [startClick, setStartClick] = useState(false)
    const [longPressStarted, setlongPressStarted] = useState(false)

    const nextItemRef = useRef(nextItem)
    let currentPosition = nextItem + 1
    nextItemRef.current = nextItem

    let content = props.label
    if (props.digit) {
        content = [...props.digit, ...content]
    }


    const onStart = () => {
        setStartClick(true)
        setlongPressStarted(true)
    }

    const onFinish = () => {
        setlongPressStarted(false)
        onClickSendToNumberPad(props.digit[0])
    }

    const onCancel = () => {
        setStartClick(false)
        setlongPressStarted(false)
    }

    const callback = useCallback(() =>{}, []);
    const enabled = true
    const numbers = useLongPress(enabled ? callback : null, {
        onStart: event => onStart(event),
        onFinish: event => onFinish(event),
        onCancel: event => onCancel(event),
    });

    const onClickSendToNumberPad = (value) => {
        if (startClick && longPressStarted) {
            props.onClick(value)
        } else if (!startClick) {
            props.onClick(value)
        }
    }


    const onClick = () => {

        const keyTimout = setTimeout(() => {
            setTimeOver(true);
            onClickSendToNumberPad(props.label[nextItemRef.current - 1])
            setNextItem(0)
        }, 600);

        if (!timeOver && nextItemRef.current > 0) {
            clearTimeout(keyTimout)
        } else if (timeOver) {
            setTimeOver(false)
        }

        if (props.label.length >= currentPosition) {
            setNextItem(nextItem + 1)
        } else if (currentPosition === props.label.length) {
            setNextItem(0)
        }
    }


    return <input onClick={onClick} {...numbers} type="button" value={content.join('').toString()} />
}

export default Button;
import React, { useState, useRef,useCallback} from 'react';
import { useLongPress } from 'use-long-press'
import './Button.css'

const Button = (props) => {


    let [nextItem, setNextItem] = useState(0)
    const [timeOutflag, setTimeOutFlag] = useState(false)
    const [startClick, setStartClick] = useState(false)
    const [longPressStartedFlag, setLongPressStartedFlag] = useState(false)

    const nextItemRef = useRef(nextItem)
    let currentPosition = nextItem + 1
    nextItemRef.current = nextItem

    let content = props.label

    if (props.digit) {
        content = [...props.digit, ...content]
    }


     const enabled = true

    const callback = useCallback(event => {
    }, []);


    const onStart = (event) => {
        setStartClick(true)
        setLongPressStartedFlag(true)
    }

    const onFinish = (event) => {
        setLongPressStartedFlag(false)
        onClickSendToParent(props.digit[0])
    }

    const onCancel = (event) => {
        setStartClick(false)
        setLongPressStartedFlag(false)
    }

    const numbers = useLongPress(enabled ? callback : null, {
        onStart: event => onStart(event),
        onFinish: event => onFinish(event),
        onCancel: event => onCancel(event),
    });

    const onClickSendToParent = (val) => {
        if (startClick && longPressStartedFlag){
            props.onClick(val)
        }else if(!startClick) {
            props.onClick(val)
        }
    }


    const onClick = () => {

        const keyTimout = setTimeout(() => {
            setTimeOutFlag(true);
            onClickSendToParent(props.label[nextItemRef.current - 1])
            setNextItem(0)
        }, 500);

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


    return <input onClick={onClick} {...numbers} type="button" value={content.join('').toString()} />
}

export default Button;
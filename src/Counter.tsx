import React, {useState} from 'react';
import './App.css';

type PropsType = {
    plusOne: () => void,
    reset: () => void,
    counter: number,
    error: string
    minn: number,
    maxx: number,

}

export function Counter(props: PropsType) {
    const styles = {color: ''}
    if (props.counter === props.maxx) {
        styles.color = 'red'
    }
    return <div className="main">
        <div className="d2">
            <div className="counter"><p style={styles}>{props.counter}</p></div>
            <button onClick={props.reset} disabled={props.counter === props.minn ? true : false}>reset</button>
            <button onClick={props.plusOne} disabled={props.counter === props.maxx ? true : false}>inc</button>
            <p className="err">{props.error}</p>
        </div>

    </div>
}

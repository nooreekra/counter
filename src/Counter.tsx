import React, {useState} from 'react';
import './App.css';


export function Counter(){
    const [counter, setCounter] = useState(0)
    const [error, setError] = useState('')
    const plusOne = () => counter === 10 ? (setCounter(10), setError('Max value of counter!')) : (setCounter(counter + 1), setError(''))
    const minusOne = () => counter === 0 ? (setCounter(0), setError('Min value of counter!')) : (setCounter(counter - 1), setError(''))
    return <div>
        <div className="counter">{counter}</div>
        <button onClick={plusOne}>+</button>
        <button onClick={minusOne}>-</button>
        <p className="err">{error}</p>
    </div>
}



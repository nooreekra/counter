import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {Restriction} from "./Restriction"

function App() {
    const [counter, setCounter] = useState(0)
    const [error, setError] = useState('')
    const [minn, setMin] = useState(0)
    const [maxx, setMax] = useState(10)
    const changeRestrictions = (maxV: string, minV: string) => {
        if (parseInt(minV) >= parseInt(maxV)) {
            setError('Min value is greater than Max value!')
            setCounter(0)
            setMin(0);
            setMax(0);
        } else {
            setCounter(parseInt(minV));
            setMin(parseInt(minV));
            setMax(parseInt(maxV));
        }

    }
    const plusOne = () => counter === maxx ? setCounter(counter) : (setCounter(counter + 1), setError(''))
    const reset = () => setCounter(minn)


    return (
        <div className="App">
            <Restriction
                changeRestrictions={changeRestrictions}></Restriction>
            <Counter
                plusOne={plusOne}
                reset={reset}
                counter={counter}
                error={error}
                minn={minn}
                maxx={maxx}
            ></Counter>
        </div>
    );
}

export default App;

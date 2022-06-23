import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {log} from "util";

type PropsType = {
    changeRestrictions: (maxV: string, minV: string) => void
}


export function Restriction(props: PropsType) {
    const [maxV, setMinValue] = useState('')
    const [minV, setMaxValue] = useState('')

    const onChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(e.currentTarget.value)
    }

    const onChangeHandlerMin = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValue(e.currentTarget.value)
    }

    const onClickSet = () => {
        props.changeRestrictions(minV, maxV)
    }
    return <div>
        <div className="main">
            <div className="d2">
                <p>max value</p><input onChange={onChangeHandlerMax} type="number"/>
                <p>min value</p><input onChange={onChangeHandlerMin} type="number"/>
                <button onClick={onClickSet}>Set</button>
            </div>
        </div>
    </div>
}
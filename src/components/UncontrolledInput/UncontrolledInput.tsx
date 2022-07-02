import React, {useRef, useState} from 'react';

export const UncontrolledInput = () => {
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const saveHandler = () => inputRef.current && setValue2(inputRef.current.value)

    return (
        <>
            <input onChange={(e)=>{setValue1(e.currentTarget.value)}}/> -actualValue: {value1} <br/>
            <input ref={inputRef}/> <button onClick={saveHandler}>save</button> -actualValue: {value2}
        </>
    );
};
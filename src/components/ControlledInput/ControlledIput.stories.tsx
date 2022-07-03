import React, {useState} from 'react';


export default {
    title: 'Input',
};

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    return (
        <input value={parentValue} onChange={(e) => setParentValue(e.currentTarget.value)}/>
    )
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)
    return (
        <input type={"checkbox"} checked={parentValue} onChange={(e) => setParentValue(e.currentTarget.checked)}/>
    )
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    return (
        <select value={parentValue} onChange={(e)=>{setParentValue(e.currentTarget.value)}}>
            <option>none</option>
            <option value={"1"}>City1</option>
            <option value={"2"}>City2</option>
            <option value={"3"}>City3</option>
        </select>
    )
}

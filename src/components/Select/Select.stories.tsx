import {ComponentMeta} from "@storybook/react";
import {Select} from "./Select";
import React, {useMemo, useState} from "react";


export default {
    title: 'Select',
    component: Select,
} as ComponentMeta<typeof Select>;

export const SelectShowUp = () => {
    const [value, setValue] = useState(2)

    return <Select value={value}
                   onChange={setValue}
                   items={[
                       {value: 1, title: 'Bread'},
                       {value: 2, title: 'Milk'},
                       {value: 3, title: 'Cheese'},
                       {value: 4, title: 'Vegetables'}
                   ]}/>
}

export const SelectWithoutValue = () => {
    const [value, setValue] = useState(null)

    return <Select value={value}
                   onChange={setValue}
                   items={[
                       {value: 1, title: 'Bread'},
                       {value: 2, title: 'Milk'},
                       {value: 3, title: 'Cheese'},
                       {value: 4, title: 'Beef'}
                   ]}/>
}

const Counter = (props: { count: number }) => {
    console.log('Counter rendering')
    return <div>{props.count}</div>
}

export const SelectWithUseMemo = () => {
    console.log('SelectWithUseMemo rendering')
    const [value, setValue] = useState(null)
    const [counter, setCounter] = useState(0)
    const [state, setState] = useState([
        {value: 1, countryID: 'Japan', title: 'Tokyo', population: 37339804},
        {value: 2, countryID: 'India', title: 'Delhi', population: 31181376},
        {value: 3, countryID: 'China', title: 'Shanghai', population: 27795702},
        {value: 4, countryID: 'China', title: 'Beijing', population: 20896820},
        {value: 5, countryID: 'India', title: 'Mumbai', population: 20667656},
        {value: 6, countryID: 'Japan', title: 'Osaka', population: 19110616},
        {value: 7, countryID: 'Japan', title: 'Nagoya', population: 9571596},
        {value: 8, countryID: 'China', title: 'Chengdu', population: 9478521},
        {value: 9, countryID: 'India', title: 'Ahmedabad', population: 8450228},

    ])

    const citiesWithM = useMemo(()=>{
        return  state.filter(c => c.title.toLowerCase().indexOf('m') > -1)
    }, [state])

    const citiesOfJapan = useMemo(()=>{
        return  state.filter(c => c.countryID === 'Japan')
    }, [state])

    const bigCities = useMemo(()=>{
        return  state.filter(c => c.population > 10000000)
    }, [state])

    const addCity = () => setState([...state, {value: 10, countryID: 'India', title: 'Chennai', population: 11503293}])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addCity}>add city</button>
        <Counter count={counter}/>
        <Select value={value}
                onChange={setValue}
                items={citiesWithM}/>
        <Select value={value}
                onChange={setValue}
                items={citiesOfJapan}/>
        <Select value={value}
                onChange={setValue}
                items={bigCities}/>
    </>
}
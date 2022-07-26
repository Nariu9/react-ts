import React, {useMemo, useState} from 'react';


export default {
    title: 'useState demo',
};

function generateData() {
    //difficult counting
    console.log('generate Data')
    return 1
}

export const Example1 = () => {
    console.log('Example1 rendering')

    //const initialValue = useMemo(generateData, [])

    const [counter, setCounter] = useState(generateData)
    const changer = (state: number) => state + 1
    return <>
        <button onClick={() => setCounter(state => state + 1)}>+</button>
        {counter}
    </>
}



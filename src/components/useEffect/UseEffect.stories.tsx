import React, {useEffect, useState} from 'react';


export default {
    title: 'useEffect demo',
};

export const SimpleExample = () => {
    console.log('SimpleExample rendering')

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        document.title = counter.toString()
        console.log('useEffect every render')
    })
    useEffect(() => {
        document.title = counter.toString()
        console.log('useEffect only first render(componentDidMount)')
    }, [])
    useEffect(() => {
        document.title = counter.toString()
        console.log('useEffect first render and every counter change')
    }, [counter])


    return <>
        Hello {counter} Fake {fake}
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
    </>
}

export const SetTimeoutExample = () => {
    console.log('SetTimeoutExample rendering')

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)
    }, [])


    return <>
        Hello, counter: {counter} - Fake: {fake}
        {/* <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>*/}
    </>
}

export const MyClock = () => {
    console.log('MyWatch rendering')
    const [date, setTime] = useState<Date>(new Date())

    useEffect(() => {
       const id = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => {
            clearInterval(id)
        }
    }, [])

    return <>
        {date?.toLocaleTimeString()}
    </>
}



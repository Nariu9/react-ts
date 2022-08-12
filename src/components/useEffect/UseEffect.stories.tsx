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

export const SetIntervalExample = () => {
    console.log('SetTimeoutExample rendering')

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
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

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)
    console.log('Component rendered with ' + counter)
    useEffect(() => {
        console.log('Effect occurred ' + counter)
        return () => {
            console.log('RESET EFFECT ' + counter)
        }
    }, [counter])
    const increase = () => setCounter(counter + 1)
    return <>
        Hello, counter: {counter}
        <button onClick={increase}>+</button>
    </>
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState('')
    console.log('Component rendered with ' + text)
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }
        window.document.addEventListener('keypress', handler)
        return () => {
            window.document.removeEventListener('keypress', handler)
        }
    }, [text])
    return <>
        Typed text: {text}
    </>
}

export const SetTimeoutExample = () => {
    const [text, setText] = useState('')
    console.log('Component rendered with ' + text)
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log('TIMEOUT EXPIRED')
            setText('3 seconds passed')
        }, 3000)
        return () => clearTimeout(timeoutId)
    }, [text])
    return <>
        text: {text}
    </>
}
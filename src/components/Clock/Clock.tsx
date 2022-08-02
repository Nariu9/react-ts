import React, {useEffect, useState} from 'react';

type ClockPropsType = {}

const get2DigitsString = (time:number) => time < 10 ? '0'+ time : time

export const Clock: React.FC<ClockPropsType> = () => {

    const [date, setDate] = useState(new Date())
    useEffect(() => {
        const intervalId =  setInterval(() => {
            console.log('TICK-TACK')
            setDate(new Date())
        }, 1000)

        return ()=>{
            clearInterval(intervalId)
        }
    }, [])

    return (
        <div>
            <span>{get2DigitsString(date.getHours())}</span>
            :
            <span>{get2DigitsString(date.getMinutes())}</span>
            :
            <span>{get2DigitsString(date.getSeconds())}</span>
        </div>
    );
};
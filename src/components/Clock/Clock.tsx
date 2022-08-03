import React, {useEffect, useState} from 'react';
import classes from './Clock.module.css';

type ClockPropsType = {
    analogueClockMode: boolean
}

const get2DigitsString = (time: number) => time < 10 ? '0' + time : time

export const Clock: React.FC<ClockPropsType> = ({analogueClockMode}) => {

    const [date, setDate] = useState(new Date())
    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('TICK-TACK')
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return (
        <div>
            {analogueClockMode
                ? <AnalogueClock date={date}/>
                : <DigitalClock date={date}/>}
        </div>
    );
};

type DigitalClockPropsType = {
    date: Date
}

const DigitalClock: React.FC<DigitalClockPropsType> = ({date}) => {
    return <div className={classes.digital}>
        <span>{get2DigitsString(date.getHours())}</span>
        :
        <span>{get2DigitsString(date.getMinutes())}</span>
        :
        <span>{get2DigitsString(date.getSeconds())}</span>
    </div>
}

type AnalogueClockPropsType = {
    date: Date
}

const AnalogueClock: React.FC<AnalogueClockPropsType> = ({date}) => {
    return <div className={classes.analogue}>
        <div
            className={classes.hour_hand}
            style={{
                transform: `rotateZ(${date.getHours() * 30}deg)`
            }}
        />
        <div
            className={classes.min_hand}
            style={{
                transform: `rotateZ(${date.getMinutes() * 6}deg)`
            }}
        />
        <div
            className={classes.sec_hand}
            style={{
                transform: `rotateZ(${date.getSeconds() * 6}deg)`
            }}
        />
        <span className={classes.twelve}>12</span>
        <span className={classes.one}>1</span>
        <span className={classes.two}>2</span>
        <span className={classes.three}>3</span>
        <span className={classes.four}>4</span>
        <span className={classes.five}>5</span>
        <span className={classes.six}>6</span>
        <span className={classes.seven}>7</span>
        <span className={classes.eight}>8</span>
        <span className={classes.nine}>9</span>
        <span className={classes.ten}>10</span>
        <span className={classes.eleven}>11</span>
    </div>
}
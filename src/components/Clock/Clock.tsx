import React, {useEffect, useState} from 'react';
import {DigitalClock} from './DigitalClock';
import {AnalogueClock1} from './AnalogueClock1';
import {AnalogueClock2} from './AnalogueClock2';

type ClockPropsType = {
    mode: 'digital' | 'analogue1' | 'analogue2'
}

export const Clock: React.FC<ClockPropsType> = ({mode}) => {

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

    let view
    switch (mode) {
        case 'digital':
            view = <DigitalClock date={date}/>
            break
        case 'analogue1':
            view = <AnalogueClock1 date={date}/>
            break
        case 'analogue2':
            view = <AnalogueClock2 date={date}/>
            break
        default:
            view = <AnalogueClock1 date={date}/>
    }

    return (
        <div>
            {view}
        </div>
    );
};

export type ClockViewPropsType = {
    date: Date
}
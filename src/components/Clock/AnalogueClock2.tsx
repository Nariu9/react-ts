import React from 'react';
import classes from './AnalogueClock2.module.css';
import {ClockViewPropsType} from './Clock';

export const AnalogueClock2: React.FC<ClockViewPropsType> = ({date}) => {
    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    };

    return <div className={classes.clock}>
        <div className={classes.analogClock}>
            <div className={`${classes.dial} ${classes.seconds}`} style={secondsStyle}/>
            <div className={`${classes.dial} ${classes.minutes}`} style={minutesStyle}/>
            <div className={`${classes.dial} ${classes.hours}`} style={hoursStyle}/>
        </div>
    </div>
}
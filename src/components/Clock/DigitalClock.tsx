import React from 'react';
import classes from './DigitalClock.module.css';
import {ClockViewPropsType} from './Clock';

const get2DigitsString = (time: number) => time < 10 ? '0' + time : time

export const DigitalClock: React.FC<ClockViewPropsType> = ({date}) => {
    return <div className={classes.digital}>
        <span>{get2DigitsString(date.getHours())}</span>
        :
        <span>{get2DigitsString(date.getMinutes())}</span>
        :
        <span>{get2DigitsString(date.getSeconds())}</span>
    </div>
}
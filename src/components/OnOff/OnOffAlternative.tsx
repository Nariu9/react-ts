import classes from "./OnOff.module.css";
import React from "react";

type OnOffPropsType = {
    value:boolean
    switchOnOff:(value:boolean)=>void
}


export const OnOffAlternative = (props:OnOffPropsType) => {

    return (
     <div className={classes.wrapper}>
       <button className={`${props.value && classes.green}`} onClick={()=>props.switchOnOff(true)}>ON</button>
       <button className={`${!props.value && classes.red}`} onClick={()=>props.switchOnOff(false)}>OFF</button>
       <div className={props.value ? classes.green : classes.red}></div>
     </div>
  )
}
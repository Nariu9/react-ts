import React, {useState} from 'react';

type OnOffAlternativePropsType = {
    /*on: boolean*/
}

const OnOff = (props:OnOffAlternativePropsType) => {
    console.log('OnOff rendering')

    let [on, setOn] =useState(false)
    console.log(on)

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px black solid",
        display: "inline-block",
        margin: "5px",
        padding: "5px",
        backgroundColor: on ? "green" : "white"//props.on && "green" не сработает, т.к. false - это не цвет
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px black solid",
        display: "inline-block",
        margin: "5px",
        padding: "5px",
        backgroundColor: on ? "white" : "red"
    };
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px black solid",
        display: "inline-block",
        margin: "5px",
        backgroundColor: on ? "green" : "red"
    }

    return (
        <div>
            <div style={onStyle} onClick={()=>setOn(true)}>On</div>
            <div style={offStyle} onClick={()=>setOn(false)}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default OnOff
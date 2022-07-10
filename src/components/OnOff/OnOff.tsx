import React from 'react';

type OnOffPropsType = {
    on: boolean
    callback: (value: boolean) => void
}

const OnOff = React.memo((props: OnOffPropsType) => {
    console.log('OnOff rendering')

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px black solid",
        display: "inline-block",
        margin: "5px",
        padding: "5px",
        backgroundColor: props.on ? "green" : "white"//props.on && "green" не сработает, т.к. false - это не цвет
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px black solid",
        display: "inline-block",
        margin: "5px",
        padding: "5px",
        backgroundColor: props.on ? "white" : "red"
    };
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px black solid",
        display: "inline-block",
        margin: "5px",
        backgroundColor: props.on ? "green" : "red"
    }

    return (
        <div>
            <div style={onStyle} onClick={() => props.callback(!props.on)}>On</div>
            <div style={offStyle} onClick={() => props.callback(!props.on)}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
});

export default OnOff
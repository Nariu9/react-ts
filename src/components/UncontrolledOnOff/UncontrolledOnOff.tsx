import React, {useState} from 'react';

type UncontrolledOnOffPropsType = {
    onChange: (value: boolean) => void
    defaultOn?: boolean
}

export const UncontrolledOnOff = React.memo ((props: UncontrolledOnOffPropsType) => {
    console.log('UncontrolledOnOff rendering')

    let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false)
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

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }

    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
});
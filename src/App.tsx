import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";

function sum(a: number, b: number) {
    alert(a + b)
}

/*sum();*/


function App() {
    console.log('App rendering');

    const [switcher, setSwitcher] = useState<boolean>(false)

    const switchOnOff = (value:boolean) => {
        setSwitcher(value)
    }

    return (
        <div>
            <Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'Users'} collapsed={false}/>

            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <OnOff value={switcher} switchOnOff={switchOnOff}/>
        </div>
    );
}

type PageTitlePropsType= {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    debugger
    console.log('PageTitle rendering');
    return <h1>{ props.title }</h1>
}



export default App;

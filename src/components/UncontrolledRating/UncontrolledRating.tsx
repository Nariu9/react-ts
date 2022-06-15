import React, {useState} from "react";

export function UncontrolledRating() {
    console.log('UncontrolledRating rendering');

    const [starSelected, setStarSelected] = useState(0)

    return (
        <div>
            <Star selected={starSelected > 0} callback={()=>setStarSelected(1)}/>
            <Star selected={starSelected > 1} callback={()=>setStarSelected(2)}/>
            <Star selected={starSelected > 2} callback={()=>setStarSelected(3)}/>
            <Star selected={starSelected > 3} callback={()=>setStarSelected(4)}/>
            <Star selected={starSelected > 4} callback={()=>setStarSelected(5)}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    callback: () => void
}

function Star(props: StarPropsType) {
    console.log('Star rendering');

    /*const chosenStar = props.selected ? <b>star </b> : 'star '            //my version

    return (
        <span onClick={()=>props.callback(props.starSelected)}>{chosenStar}</span>
    )*/

    return <span onClick={props.callback}>{props.selected ? <b>star </b> : 'star '}</span>           //Dimych version
}
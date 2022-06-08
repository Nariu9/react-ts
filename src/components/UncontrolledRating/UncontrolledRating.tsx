import React, {useState} from "react";

type UncontrolledRatingPropsType= {
    /*value: 0 | 1 | 2 | 3 | 4 | 5*/
}

export function UncontrolledRating(props: UncontrolledRatingPropsType) {
    console.log('UncontrolledRating rendering');

    const [starSelected, setStarSelected] = useState(0)

    return (
        <div>
            <Star selected={starSelected > 0} callback={setStarSelected} starSelected={1}/>
            <Star selected={starSelected > 1} callback={setStarSelected} starSelected={2}/>
            <Star selected={starSelected > 2} callback={setStarSelected} starSelected={3}/>
            <Star selected={starSelected > 3} callback={setStarSelected} starSelected={4}/>
            <Star selected={starSelected > 4} callback={setStarSelected} starSelected={5}/>
        </div>
    )
}

type StarPropsType= {
    selected: boolean
    callback:(value:number)=>void
    starSelected:number
}

function Star(props: StarPropsType) {
    console.log('Star rendering');

    const chosenStar = props.selected ? <b>star </b> : 'star '

    return (
        <span onClick={()=>props.callback(props.starSelected)}>{chosenStar}</span>
    )
}
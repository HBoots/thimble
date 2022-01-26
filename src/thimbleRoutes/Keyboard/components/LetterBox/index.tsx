import React, { useState } from 'react';
import { colors } from '../../../../helpers/jsColors';

import './style.css'

const Mini: React.FC<{count: number}> = ({count}) => {
    const numShown = 4;
    const [isClicked, setIsClicked] = useState(false);
    const [miniCount, setMiniCount] = useState(0);

    return (
        <div 
            id="mini" 
            onClick={() => {
                setIsClicked(true);
                setMiniCount(count); 
            }}
            style={{backgroundColor: isClicked && count === miniCount + 1? colors.purpleFeedback : isClicked && count - (miniCount + 1) < numShown? colors.purpleFaded: 'inherit'}}
        />
    )
}

export const LetterBox: React.FC<{letter: string}> = ({letter}) => {
    const array_15 = new Array(15).fill('')
    const [count, setCount] = useState(0)

    return (
        <div 
            id="letter-box"
            style={{ width: letter === ' '? '47vw': '9.5vw'}}
            onClick={() => {setCount(count + 1);console.log(count)}}
        >
            {array_15.map(() => <Mini count={count} />)}
            <div id='letter'>{letter}</div> 
            {/* <img style={{pointerEvents: 'none', position: 'absolute', top: '5%', left: '5%', width: '90%', height: '90%', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '6px', boxSizing: 'border-box', border: '1px solid black'}} src={require("../../../../assets/images/letter_D.png")} alt='letter' width='100%' height='100%' /> */}
        </div>
    )
}
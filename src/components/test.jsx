import React, { useState } from 'react'
import Emo_range from './test-comps/emo_range';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Checkbox from '@mui/material/Checkbox';

const TypeResponseEmotion = ["anger", "sadness", "happiness","fear","disgust","surprise"];

const fake_data = {
    Age:22,
    Gender:"M",
    Nationality:"??",
    Prior_Experience_to_music:"??"
}

const Test = () => {
    const [emolist, setEmolist] = useState(["",""]);
    const [play, setPlay] = useState(false);
    
    var res={
        musicalElem: null,
        responseEmo: null,
        responseMusic: null,
        tension: null,
        timbre: null
    };
    
    const audioElement = new Audio("Test.wav");

    function handleclick(){
        window.location.href = "/result";
    }

    function new_emo(emotion){
        if(emolist.includes(emotion)) return;
        var tmp = ["",""]
        tmp[1] = emolist[0];
        tmp[0] = emotion;
        setEmolist(tmp);
        console.log(emolist)
    }

    function play_sound(){
        audioElement.play()
        setPlay(true)
    }

    return (
        <div style={{height:300}}>
            <Button disabled={play} variant="outlined" onClick={play_sound}>Play Sound</Button>
            <div style={{display:'flex'}}>
                {play && <p> 1. Do you think this is a music?</p>}
                {play && <Checkbox></Checkbox>}
            </div>

            {play && <p> 2. Pick 2 feelings you felt most.</p>}
            <ButtonGroup>
            {   
                play &&
                TypeResponseEmotion.map((text,index) => (
                    <Button 
                    key={index} value={text}
                    variant={emolist.includes(text)?"contained":"outlined"}
                    onClick = {(e)=>{new_emo(e.target.value)}}
                    >
                        {text}
                    </Button>
                ))
            }
            </ButtonGroup>

            {emolist[0]!="" && <p> 3. From 1~5, how intense they were?</p>}

            {
                emolist.map((text,index) => (
                    <Emo_range emo={text}></Emo_range>
                ))
            }
            {/* <button onClick = {handleclick}>SHOW RESULT</button> */}
        </div>
    )
}

export default Test
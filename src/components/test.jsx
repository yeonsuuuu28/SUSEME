import React, { useState } from 'react'
import Emo_range from './test-comps/emo_range';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import Slider from '@mui/material/Slider';

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
        musicalElem: "dynamic",
        responseEmo: {},
        responseMusic: false,
        tension: "3",
        timbre: "cap"
    };
    
    const audioElement = new Audio("/experiment-sounds/"+res.musicalElem+"/"+res.timbre+"/"+res.tension+".wav");

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
                {play && <Checkbox 
                    onChange={(e)=>{
                        res.responseMusic=e.target.checked
                        console.log(res);
                    }
                    }></Checkbox>}
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

            
            {emolist[0]!="" && 
                <div style={{display:'flex', margin: 5}}>
                    <Chip label={emolist[0]} style={{width:150}} />
                    <Slider
                        aria-label="Temperature"
                        defaultValue={0}
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        min={0}
                        max={5}
                        style={{width: 500, marginLeft:20, marginRight:20}}
                        onChange={(e)=>{
                            var tmp = res.responseEmo;
                            if(tmp==null) tmp = {};
                            for(var key in tmp){
                                if (key!==emolist[0] && key!==emolist[1]){
                                    delete tmp[key]
                                }
                            }
                            tmp[emolist[0]] = e.target.value
                            res.responseEmo=tmp;
                            console.log(res);
                        }}
                    />
                </div>}

            {emolist[1]!="" && 
            <div style={{display:'flex', margin: 5}}>
                <Chip label={emolist[1]} style={{width:150}} />
                <Slider
                    aria-label="Temperature"
                    defaultValue={0}
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={0}
                    max={5}
                    style={{width: 500, marginLeft:20, marginRight:20}}
                    onChange={(e)=>{
                        var tmp = res.responseEmo;
                        if(tmp==null) tmp = {};
                        for(var key in tmp){
                            if (key!==emolist[0] && key!==emolist[1]){
                                delete tmp[key]
                            }
                        }
                        tmp[emolist[1]] = e.target.value
                        res.responseEmo=tmp;
                        console.log(res);

                    }}
                />
            </div>}
            
            {/* <button onClick = {handleclick}>SHOW RESULT</button> */}
        </div>
    )
}

export default Test
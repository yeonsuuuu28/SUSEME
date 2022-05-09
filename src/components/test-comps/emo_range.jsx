import React, { useState } from 'react';
import Chip from '@mui/material/Chip';
import Slider from '@mui/material/Slider';

const TypeResponseEmotion = ["anger", "sadness", "happiness","fear","disgust","surprise"];


const Emo_range = ({emo, setResponseEmo}) => {
    if(!TypeResponseEmotion.includes(emo)) return <div></div>;
    return (
        <div style={{display:'flex', margin: 5}}>
            <Chip label={emo} style={{width:150}} />
            <Slider
                aria-label="Temperature"
                defaultValue={0}
                valueLabelDisplay="auto"
                step={1}
                marks
                min={0}
                max={5}
                style={{width: 500, marginLeft:20, marginRight:20}}
                onChange={(e)=>{console.log(e.target.value)}}
            />
        </div>
    )
}

export default Emo_range;
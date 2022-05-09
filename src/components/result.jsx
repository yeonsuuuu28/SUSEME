import React from 'react';
import styles from './result.module.css';
import Navbar from './navbar.jsx';
import Callout from './result-comps/callout.jsx';
import MusicianInHeart from './result-comps/musician-in-heart.jsx';
import ResultTables from './result-comps/result-tables.jsx';


/* Codes for data and mockup */

const TypeGender = "male" || "female" || String;
const TypeAge = Number;
const TypePriorExperience = Number;
const TypeMusicalElem = "dynamic" || "tempo" || "pitch";
const TypeTimbre = "dog" || "cap" || "fall";
const TypeTension = [1, 2, 3, 4, 5, 6, 7];
const TypeResponseMusic = [false, true];
const TypeResponseEmotion = ["anger", "sadness", "happiness", "fear", "disgust", "surprise"];
const TypeResponseScale = [1, 2, 3, 4, 5];


const TypeResult = [ 
    { 
        musicalElem: TypeMusicalElem,
        timbre: TypeTimbre,
        tension: TypeTension,
        responseMusic: TypeResponseMusic,
        responseEmo: [
            {emotion: TypeResponseEmotion, scale: TypeResponseScale},
            {emotion: TypeResponseEmotion, scale: TypeResponseScale}
        ]
    }  
];

const makeResult = (musicalElem, timbre, tension, responseMusic, emo1, scale1, emo2, scale2) => {
    return {
        musicalElem,
        timbre,
        tension,
        responseMusic,
        responseEmo: [
            {emotion: emo1, scale: scale1},
            {emotion: emo2, scale: scale2},
        ]
    }
};

const makeResultByIndex = (musicalElem, timbre, tension, responseMusic, emo1, scale1, emo2, scale2) => {
    return makeResult(TypeMusicalElem[musicalElem], TypeTimbre[timbre], TypeTension[tension],
        TypeResponseMusic[responseMusic], TypeResponseEmotion[emo1], TypeScale[scale1], TypeResponseEmotion[emo2], TypeScale[scale2]);
};


const exampleResult = [
    makeResult("dynamic", "dog", 1, false, "sadness", 3, "happiness", 5),
    makeResult("dynamic", "dog", 2, false, "sadness", 2, "happiness", 5),
    makeResult("dynamic", "dog", 3, true, "anger", 4, "happiness", 2),
    makeResult("pitch", "dog", 4, true, "disgust", 3, "happiness", 4),
    makeResult("pitch", "dog", 5, true, "surprise", 4, "sadness", 3),
    makeResult("pitch", "dog", 6, false, "surprise", 5, "happiness", 5),
    makeResult("tempo", "dog", 7, true, "surprise", 1, "happiness", 5),
];
/* End codes for data and mockup */

const result = () => {

    return (
        <div>
            <Navbar/>
            <div className={styles.container}>
    
                <div>Thank you for participating!</div>
                <h1>You vs. others</h1>
                <Callout>It's not verified. Just for fun!</Callout>
                <ResultTables/>
                <h1>Who's in your heart?</h1>
                <Callout>There is no scientific ground. Just for fun!</Callout>
                <MusicianInHeart musician="chopin" predicate="fallInLove"/>
                <h1>Good Bye</h1>
                <div>
                    <p>We were team SUSEME.</p>
                    <p>If you have anything to talk, please contact us by *blahblah*</p>
                </div>
            </div>
        </div>
    )
}

export default result
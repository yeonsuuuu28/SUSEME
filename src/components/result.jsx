import React from 'react';
import styles from './result.module.css';
import Navbar from './navbar.jsx';
import Callout from './result-comps/callout.jsx';
import MusicianInHeart from './result-comps/musician-in-heart.jsx';
import ResultTables from './result-comps/result-tables.jsx';

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
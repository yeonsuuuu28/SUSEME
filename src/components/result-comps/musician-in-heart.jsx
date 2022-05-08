import React from 'react';
import styles from './musician-in-heart.module.css';

const musicianInHeart = ({musician, predicate}) => {
    const musicianToLabel = {
        chopin: "Chopin",
    }

    const predicateToLabel = {
        fallInLove: "Easily Falls in Love",
    }

    /** 
     * Image path rule: /musician-in-heart/${musician}_${predicate}.png
     * Example: /musician-in-heart/chopin_fallInLove.png
     */
    const imagePath = `/musician-in-heart/${musician}_${predicate}.png`;
    const oneLineDescription = `${musicianToLabel[musician]} who ${predicateToLabel[predicate]}`;

    return (
        <div className={styles.container}>
            <p className={styles.onelinedescription}>{oneLineDescription}</p>
            <img className={styles.musicianimg} src={imagePath} alt={`A humorous image of ${oneLineDescription}`} />
        </div>
    )
}

export default musicianInHeart;
import React from 'react';
import styles from './callout.module.css';

const callout = ({children}) => {
    return (
        <div className={styles.callout}>
            {children}
        </div>
    )
}

export default callout;
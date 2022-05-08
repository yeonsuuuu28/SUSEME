import React from 'react';
import styles from './result-tables.module.css';

const resultTables = () => {
    return (
        <div>
            <h2>It's music when __ changes</h2>
            <table>
                <thead>
                    <tr>
                        <th>You 😀</th>
                        <th>Others 👥</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>pitch</td>
                        <td>tempo</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default resultTables;
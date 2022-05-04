import React from 'react'

const test = () => {

    function handleclick(){
        window.location.href = "/result";
    }

    return (
        <div>
            <button onClick = {handleclick}>SHOW RESULT</button>
        </div>
    )
}

export default test
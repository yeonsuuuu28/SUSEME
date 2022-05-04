import React from 'react'

const intro = () => {

    function handleclick(){
        window.location.href = "/test";
    }

    return (
        <div>
            <button onClick = {handleclick}>START TEST</button>
        </div>
    )
}

export default intro
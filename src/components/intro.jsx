import React from 'react'
import Navbar from './navbar.jsx'

const intro = () => {

    function handleclick(){
        window.location.href = "/test";
    }

    return (
        <div>
            <Navbar/>
            <br/><br/><br/><br/><br/>
            <button onClick = {handleclick}>START TEST</button>
        </div>
    )
}

export default intro
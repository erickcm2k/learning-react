import React from 'react'

const HolaMundo = () => {
    const sayHello = 'Hello! This is my first React app!'
    const isTrue = false
    return(
        <div className="HolaMundo">
            <h1>{sayHello}</h1>
            <h2>Platzi!</h2>
            <img src="https://arepa.s3.amazonaws.com/react.png" alt="React"></img>
            {isTrue ? <h4>This is true!</h4> : <h4>This is false!</h4>}
            {isTrue && <h5>I´m also true!</h5>}
        </div>
    )
}

export default HolaMundo
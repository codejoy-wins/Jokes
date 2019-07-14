import React from 'react'

function Joke(props){
    console.log(props);
    return(
        <div>
            <h2 className="question" style={{display: props.question ? "block" : "none"}}>Question: {props.question}</h2>
            <h1 className="answer" style={{color: !props.question && "purple"}}>Answer: {props.answer}</h1>
            <hr style={{padding: props.question ? "0" : "4vw"}}></hr>
        </div>
    )
}

export default Joke
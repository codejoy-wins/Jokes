import React from 'react'

function Joke(props){
    console.log(props);
    return(
        <div>
            <h2 className="question">{props.question}</h2>
            <h1 className="answer">{props.answer}</h1>
        </div>
    )
}

export default Joke
import React from 'react';
import Joke from './components/Joke';
import './Master.css'

function Master(){
    return(
        <div>
            Hello
            <Joke question="How are you?" answer="Good!"/>
            <Joke question="How am I?" answer="Badass!"/>
            <Joke question="How are you?" answer="Good!"/>
            <Joke question="How is everyone?" answer="Good!"/>
            <Joke answer="Good punchline!"/>
        </div>
    )
}

export default Master;
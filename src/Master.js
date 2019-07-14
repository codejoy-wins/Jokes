import React from 'react';
import Joke from './components/Joke';
import jokesData from './components/jokesData';
import './Master.css'

function Master(){
    // jokecomponents
    return(
        <div>
            <Joke question="How are you?" answer="Good!"/>
            <Joke question="How am I?" answer="Badass!"/>
            <Joke answer="Good!"/>
            <Joke question="How is everyone?" answer="Good!"/>
            <Joke answer="Good punchline!"/>
        </div>
    )
}

export default Master;
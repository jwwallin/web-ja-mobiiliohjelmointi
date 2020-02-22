import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Button } from './Button.js'
import { Statistics } from './Statistics.js'

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [poor, setPoor] = useState(0);

    const stats = {
        good: good,
        neutral: neutral,
        poor: poor,
        total: good + neutral + poor
    }

    return (<div>
        <h1>Give feedback!</h1>
        <Button text='Good' onClick={() => setGood(good + 1)} />
        <Button text='Neutral' onClick={() => setNeutral(neutral + 1)} />
        <Button text='Poor' onClick={() => setPoor(poor + 1)} />
        <Statistics stats={stats} />
    </div>)
}

ReactDOM.render(<App />, document.getElementById('root'))

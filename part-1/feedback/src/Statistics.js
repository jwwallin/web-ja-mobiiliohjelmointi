import React from 'react'
import { Statistic } from './Statistic.js'

export const Statistics = ({ stats }) => {
    return (
        <div>
            <h2>Statistics:</h2>
            {stats.total === 0 ?
                <p>No feedback given.</p>
                :
                <table>
                    <tbody>
                        <Statistic title='Good' value={stats.good} />
                        <Statistic title='Neutral' value={stats.neutral} />
                        <Statistic title='Poor' value={stats.poor} />
                        <Statistic title='Average' value={average(stats)} />
                        <Statistic title='Positives' value={percentGood(stats)} unit='%' />
                    </tbody>
                </table>}
        </div>
    )
}

const average = (stats) => {
    const sum = stats.good * 1 + stats.poor * -1
    return (sum / stats.total).toPrecision(1)
}
const percentGood = (stats) => {
    return (stats.good * 100 / stats.total).toPrecision(3)
}

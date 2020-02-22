import React from 'react'
import ReactDOM from 'react-dom'
import { Course } from './Course.js'

const App = () => {
    const course = {
        name: 'Superadvanced web and mobile programming',
        parts: [
            { id: 1, name: 'Basics of React', exercises: 8 },
            { id: 2, name: 'Using props', exercises: 10 },
            { id: 3, name: 'Component states', exercises: 12 },
        ]
    }

    return (
        <div>
            <Course course={course} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
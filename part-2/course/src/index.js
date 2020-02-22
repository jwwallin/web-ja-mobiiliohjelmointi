import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './Header.js';
import { Contents } from './Contents.js';
import { Total } from './Total.js';

const App = () => {
    const course = {
        name: 'Superadvanced web and mobile programming',
        parts: [
            { name: 'Basics of React', exercises: 8 },
            { name: 'Using props', exercises: 10 },
            { name: 'Component states', exercises: 12 },
        ]
    };
    const total = course.parts.reduce((sum, next) => sum + next.exercises, 0);

    return (
        <div>
            <Header coursename={course.name} />
            <Contents parts={course.parts} />
            <Total total={total} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
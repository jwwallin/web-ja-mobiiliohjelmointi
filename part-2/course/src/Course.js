import React from 'react'
import { Header } from './Header.js'
import { Contents } from './Contents.js'
import { Total } from './Total.js'

export const Course = ({ course }) => {

    const total = course.parts.reduce((sum, next) => sum + next.exercises, 0);
    
    return (
        <div>
            <Header coursename={course.name} />
            <Contents parts={course.parts} />
            <Total total={total} />
        </div>
    )
}
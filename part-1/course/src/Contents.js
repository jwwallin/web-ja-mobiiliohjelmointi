import React from 'react';
import { Part } from './Part.js';

export const Contents = ({ parts }) => {
    return (<div>
        {
            parts.map((part) => {
                return <Part part={part} />
            })
        }
    </div>)
}
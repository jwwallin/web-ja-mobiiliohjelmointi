import React from 'react'

export const Statistic = ({ title, value, unit }) => {
    return (
        <tr>
            <td>{title}</td>
            <td>{value}{unit}</td>
        </tr>
    )
}

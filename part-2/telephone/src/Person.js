import React from 'react'

const Person = ({ person, onDelete }) => {
    return (
        <tr key={person.id} >
            <td>{person.name}</td>
            <td>{person.number}</td>
            <td><button onClick={() => onDelete(person)} >Delete</button></td>
        </tr>
    )
}

export default Person

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AddPersonForm from './AddPersonForm.js'
import Person from './Person.js'

const App = () => {
    const url = 'http://localhost:3001/persons'

    // state hooks :)
    const [persons, setPersons] = useState([]) // initial state is loaded from the server later
    const [nextId, setNextId] = useState(0)
    const newName = useState('')
    const newNumber = useState('')

    // doing form control state here in this way is ugly and unnecessary
    // this would be simpler and cleaner if moved into and handled in AddPersonForm
    // I will leave these here to adhere to the exercise 
    const [name, setName] = newName
    const [number, setNumber] = newNumber

    // will only run on initial render thus serving as the initial state load
    // and triggering a rerender for display to the user
    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setPersons(response.data)
            })
    }, [])

    const onSubmitNewPerson = () => {
        setName('')
        setNumber('')
        if (persons.filter((person) => person.name === name).length > 0) { // useState hook makes sure state is never undefined
            alert('Name already exists in directory.')
            return
        }
        setNextId(nextId + 1)
        axios.post(url, { name: name, number: number })
            .then(
                () => axios.get(url)
                    .then((response) => {
                        setPersons(response.data)
                    })
            )
    }

    const deletePerson = (person) => {
        if (window.confirm('Do you really want to remove ' + person.name + '?')) {
            axios.delete(url + '/' + person.id)
            .then(
                () => axios.get(url)
                    .then((response) => {
                        setPersons(response.data)
                    })
            )
        }
    }

    return (
        <div>
            <h1>Telephone directory</h1>
            <AddPersonForm onSubmit={onSubmitNewPerson} newName={newName} newNumber={newNumber} />
            <h2>Directory</h2>
            <table>
                <tbody>
                    {persons.map((person) =>
                        <Person person={person} onDelete={deletePerson} />)}
                </tbody>
            </table>
        </div>
    )
}

export default App

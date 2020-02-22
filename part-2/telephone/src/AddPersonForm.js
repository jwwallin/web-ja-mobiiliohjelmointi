import React from 'react'

const AddPersonForm = ({onSubmit, newName, newNumber}) => {
    const [name, setName] = newName
    const [number, setNumber] = newNumber

    const onSubmitForm = (event) => {
        event.preventDefault()
        onSubmit()
    }

    return (
        <form onSubmit={onSubmitForm}>
            <div>
                Name: <input value={name} onChange={(event) => setName(event.target.value)} />
            </div>
            <div>
                Telephone: <input value={number} onChange={(event) => setNumber(event.target.value)} />
            </div>
            <div>
                <button type="submit">lisää</button>
            </div>
        </form>
    )
}

export default AddPersonForm

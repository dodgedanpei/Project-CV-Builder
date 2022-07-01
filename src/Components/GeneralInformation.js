import React from 'react'
import edit from '../images/icons8-edit-32.png'

export default function GeneralInformation() {

    const [user, setUser] = React.useState({
        name: "Bill Gates",
        email: "BillGates@yahoo.com",
        number: 911
    })

    const [editMode, setEditMode] = React.useState(false)

    const toggleMode = () => {
        setEditMode(prevMode => !editMode)
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setUser(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        }
        )
    }

    const submitData = (event) => {
        event.preventDefault()
        console.log(user)
        toggleMode()
    }
    return (<>
        <h1>Description
            {!editMode && <img className='edit-image' alt='Edit image' src={edit} onClick={toggleMode} />}
        </h1>
        <form>
            {editMode && <label htmlFor="name">Name:</label>}
            {editMode ? <input type="text" name="name" value={user.name} onChange={handleChange}></input> : <h3>{[user.name]}</h3>}
            {editMode && <label htmlFor="email">Email:</label>}
            {editMode ? <input type="email" name="email" value={user.email} onChange={handleChange}></input> : <h3>Email: {[user.email]}</h3>}
            {editMode && <label htmlFor="number">Phone Number:</label>}
            {editMode ? <input type="text" name="number" value={user.number} onChange={handleChange}></input> : <h3>Phone: {[user.number]}</h3>}
            {editMode && <button className='btnSubmit' onClick={submitData}>Submit</button>}
        </form>

    </>
    )
}
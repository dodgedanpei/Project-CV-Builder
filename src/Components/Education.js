import React from 'react'
import edit from '../images/icons8-edit-32.png'


export default function Education() {

    const [educationDetails, setEducationDetails] = React.useState([{
        name: 'University of Michigan',
        degree: 'Bachelors of Computer Science',
        from: '1990',
        to: '1993'
    }])


    const [editMode, setEditMode] = React.useState(false)

    let toggleEdit = () => {
        setEditMode(prevmode => !prevmode)
    }

    let handleChange = (i, e) => {
        let newFormValues = [...educationDetails];
        newFormValues[i][e.target.name] = e.target.value;
        setEducationDetails(newFormValues);
    }

    let addNewDetails = () => {
        setEducationDetails([...educationDetails, {
            name: '',
            degree: '',
            from: '',
            to: ''
        }])
    }

    let removeFormFields = (i) => {
        let newFormValues = [...educationDetails];
        newFormValues.splice(i, 1);
        setEducationDetails(newFormValues);
    }

    let handleSubmit = () => {
        toggleEdit()
    }

    return (
        <>
            <h1>Education
                {!editMode && <img className='edit-image' alt='Edit Button' src={edit} onClick={toggleEdit} />}</h1>
            {educationDetails.map((item, index) => {
                return (
                    <>
                        <form>
                            {editMode && <label >Institute Name: </label>}
                            {editMode ? <input type="text" name='name' value={item.name} onChange={e => handleChange(index, e)}></input> : <h3>{[item.name]}</h3>}
                            {editMode && <label >Degree Name: </label>}
                            {editMode ? <input type="text" name='degree' value={item.degree} onChange={e => handleChange(index, e)}></input> : <h3>{[item.degree]}</h3>}
                            {editMode && <label >Start Date: </label>}
                            {editMode ? <input type="text" name='from' value={item.from} onChange={e => handleChange(index, e)}></input> : <h3>{[item.from]} - {[item.to]}</h3>}
                            {editMode && <label >Finish Date: </label>}
                            {editMode ? <input type="text" name='to' value={item.to} onChange={e => handleChange(index, e)}></input> : ""}
                        </form>
                        {editMode && <button className='btnRemove' onClick={() => removeFormFields(index)}>&#8722;</button>}
                    </>
                )
            })}
            <div>{editMode && <button className='btnAdd' onClick={addNewDetails}>&#43;</button>}</div>
            <div>{editMode && <button className='btnSubmit' onClick={handleSubmit}>Submit</button>}</div>
        </>
    )
}
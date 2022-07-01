import React from 'react'
import edit from '../images/icons8-edit-32.png'


export default function Experience() {

    const [experienceDetails, setExperienceDetails] = React.useState([{
        company: 'Microsoft',
        position: 'CEO',
        from: '2000',
        to: 'Present'
    }])


    const [editMode, setEditMode] = React.useState(false)

    let toggleEdit = () => {
        setEditMode(prevmode => !prevmode)
    }

    let handleChange = (i, e) => {
        let newFormValues = [...experienceDetails];
        newFormValues[i][e.target.name] = e.target.value;
        setExperienceDetails(newFormValues);
    }

    let addNewDetails = () => {
        setExperienceDetails([...experienceDetails, {
            company: '',
            position: '',
            from: '',
            to: ''
        }])
    }

    let removeFormFields = (i) => {
        let newFormValues = [...experienceDetails];
        newFormValues.splice(i, 1);
        setExperienceDetails(newFormValues);
    }

    let handleSubmit = () => {
        toggleEdit()
    }

    return (
        <>
            <h1>Experience
                {!editMode && <img className='edit-image' alt='Edit image' src={edit} onClick={toggleEdit} />}</h1>
            {experienceDetails.map((item, index) => {
                return (
                    <>
                        <form>
                            {editMode && <label>Company: </label>}
                            {editMode ? <input type="text" name='company' value={item.company} onChange={e => handleChange(index, e)}></input> : <h3>{[item.company]}</h3>}
                            {editMode && <label >Position: </label>}
                            {editMode ? <input type="text" name='position' value={item.position} onChange={e => handleChange(index, e)}></input> : <h3>{[item.position]}</h3>}
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
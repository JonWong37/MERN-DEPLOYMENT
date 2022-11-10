import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Create = ({changeRefresh}) => {

    const[name, setName] = useState("")
    const[nameError, setNameError] = useState("")
    const navigate = useNavigate()
    const [errors, setErrors] = useState([])

    const nameValid = (e) =>{
        if(e.target.value.length < 3){
            setNameError(" FRONT Author name must be longer than 3 characters")
        }
        else{
            setNameError(false)
        }
        setName(e.target.value)
    }

    const newAuthor = (e) =>{
        e.preventDefault()
        let body = {
            "name": name
        }
        axios.post("http://localhost:8000/api/new/author", body)
        .then(res => {
            console.log(res.data)
            setName("")
            setErrors([])
            // navigate("/dashboard")
            changeRefresh()
        })
        .catch(err=>{
            console.log(err.response.data)
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
        })
    }

    return (
        <fieldset>
            <legend>Create.jsx</legend>
            <form onSubmit={newAuthor}>
                <p>
                    Name :
                    <input type="text"  value={name} onChange={nameValid}/>
                </p>
                {
                    (nameError) ? <p>{nameError}</p> : null
                }
                {
                    errors.map((error) => <p>{error}</p>)
                }
                <button> Create new Author</button>
            </form>
        </fieldset>
    )
}

export default Create
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const Edit = () => {
    
    const navigate = useNavigate()

    // GET PATH VARIABLE
    const{author_id} = useParams()

    const [name, setName] = useState("")
    const [errors, setErrors] = useState([]); 

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${author_id}`)
        .then(res => {
            console.log(res.data)
            setName(res.data.name)
        })
        .catch(errors => console.log(errors))
    },[])

    const updateAuthor = (e) => {
        e.preventDefault()
        let updateBody = {
            "name" : name,
        }
        //MAKE A AXIOS REQUEST TO MY API
        // important for it to be http rn and not https, because the s stands for secure
        axios.put(`http://localhost:8000/api/authors/${author_id}`, updateBody)
        .then(res => {
            console.log(res.data)
            navigate("/")
        })
        .catch(err=>{
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
        <legend>Edit.jsx</legend>
        <form onSubmit={updateAuthor}>
                <p>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </p>
                {
                    errors.map((error) => <p>{error}</p>)
                }
                <button>Submit</button>
            </form>
    </fieldset>
    )
}

export default Edit
import React, {useState, useEffect, useParams} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Dashboard = ({refresh, changeRefresh}) => {
    // state
    const [allAuthors, setAllAuthors] = useState([])
    
    useEffect(() =>{
        axios.get("http://localhost:8000/api/authors")
        .then(res => {
            res.data.sort((a,b) => a.name.localeCompare(b.name))
            setAllAuthors(res.data)
        })
        .catch(errors => console.log(errors))
    },[refresh])

    // handler

    const deleteAuthor = (author_id) => {
        axios.delete(`http://localhost:8000/api/authors/${author_id}`)
        .then(res => {
            console.log({refresh})
            changeRefresh()
        })
        .catch(errors => console.log(errors))
    }

    // allAuthors.sort((a,b) => a.name.localeCompare(b.name))

    const sorts = () => {
        allAuthors.sort((a,b) => a.name.localeCompare(b.name))
        console.log(allAuthors)
    }

    return (
        <fieldset>
            <legend>Dashboard.jsx</legend>
            {/* <button onClick={sorts}>Sort</button> */}
            <table>
                <thead>
                    <tr>
                        <th>Author Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allAuthors.map((author) => {
                            const {_id, name} = author
                            return(
                                <tr key ={author._id}>
                                    <td>{name}</td>
                                    <td>
                                        <Link to ={`/authors/edit/${_id}`}>Edit</Link>
                                    </td>
                                    <td><button onClick={() => deleteAuthor(_id)}>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </fieldset>
    )
}

export default Dashboard
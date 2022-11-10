import React, {useState, useEffect, useParams} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Dashboard = ({refresh, changeRefresh}) => {
    // state
    const [allPirates, setAllPirates] = useState([])
    const [picurl, setPicUrl] = useState("")
    
    useEffect(() =>{
        axios.get("http://localhost:8000/api/pirates")
        .then(res => {
            res.data.sort((a,b) => a.name.localeCompare(b.name))
            setAllPirates(res.data)
            setPicUrl(res.data.url)
        })
        .catch(errors => console.log(errors))
    },[refresh])

    // handler

    const deletePirate = (pirate_id) => {
        axios.delete(`http://localhost:8000/api/pirates/${pirate_id}`)
        .then(res => {
            console.log({refresh})
            changeRefresh()
        })
        .catch(errors => console.log(errors))
    }

    // allPirates.sort((a,b) => a.name.localeCompare(b.name))

    return (
        <fieldset>
            <legend>Dashboard.jsx</legend>
            <h1>Pirate Crew</h1>
            <p><Link to={'/new/pirate'}>Add Pirate</Link></p>
            <table>
                <thead>
                    <tr>
                        <th>Pirates</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allPirates.map((pirate) => {
                            const {_id, name, url} = pirate
                            return(
                                <tr key = {pirate._id}>
                                    <td>{name}</td>
                                    <td><img src={`${url}`} alt="picture" /></td>
                                    <td>
                                        <Link to ={`/pirate/${_id}`}>View Pirate</Link>
                                    </td>
                                    <td><button onClick={() => deletePirate(_id)}>Delete</button></td>
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
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Details = () => {
    const {pirate_id} = useParams()

    const [onePirate, setOnePirate] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirate/${pirate_id}`)
        .then(res => {setOnePirate(res.data)})
        .catch(errors => console.log(console.log(pirate_id)))
    },[])

    return (
        <fieldset>
            <legend>Details.jsx</legend>
            
            {
                (onePirate) ? 
                <>
                
                    <h1>Name: {onePirate.name}</h1>
                    <h2>"{onePirate.phrase}"</h2>
                    <h4><img src={`${onePirate.url}`} alt="picture" /></h4>
                    <h3>Treasure: {onePirate.treasure}</h3>
                    <h3>Crew Position : {onePirate.position}</h3>
                    <h3>Pegleg : {(onePirate.pegleg) ? "Yes" : "No"}</h3>
                    <h3>Eyepatch : {(onePirate.eyepatch) ? "Yes" : "No"}</h3>
                    <h3>Hook hand : {(onePirate.hookhand) ? "Yes" : "No"}</h3>
                    <h3></h3>
                </> : <h1>Loading....</h1>
            }
        </fieldset>
    )   
}

export default Details
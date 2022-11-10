import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Create = ({changeRefresh}) => {

    const[name, setName] = useState("")
    const[url, setUrl] = useState("")
    const[treasure, setTreasure] = useState("")
    const[phrase, setPhrase] = useState("")
    const[position, setPosition] = useState("Powder Monkey")
    const[pegleg, setPegLeg] = useState(true)
    const[eyepatch, setEyePatch] = useState(true)
    const[hookhand, setHookHand] = useState(true)

    const[id, setID] = useState("")



    const[nameError, setNameError] = useState("")
    const navigate = useNavigate()
    const [errors, setErrors] = useState([])
    const [numError, setNumError] = useState("")

    const nameValid = (e) =>{
        if(e.target.value.length < 3){
            setNameError(" FRONT Pirate name must be longer than 3 characters")
        }
        else{
            setNameError(false)
        }
        setName(e.target.value)
    }

    const numValid = (e) =>{
        if(e.target.value < 1 || e.target.value === " "){
            setNumError(" (FRONT) Enter some treasure chests!")
        }
        else{
            setNumError(false)
        }
        console.log(numError)
        console.log(e.target.value)
        setTreasure(e.target.value)
    }

    const newPirate = (e) =>{
        e.preventDefault()
        let body = {
            "name": name,
            "url" : url,
            "treasure": treasure,
            "phrase": phrase,
            "position": position,
            "pegleg": pegleg,
            "eyepatch": eyepatch,
            "hookhand": hookhand,

        }
        axios.post("http://localhost:8000/api/new/pirate", body)
        .then(res => {
            console.log(res.data)
            setErrors([])
            navigate(`/pirate/${res.data._id}`)
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
            <div>
                <h1>Add Pirate</h1>
                <button><Link to={"/"}>Crewboard</Link></button>
            </div>
            <form onSubmit={newPirate}>
                <p>
                    Name : 
                    <input type="text"  value={name} onChange={nameValid}/>
                </p>
                <p>
                    Image url : 
                    <input type="text"  value={url} onChange={(e) => setUrl(e.target.value)}/>
                </p>
                <p>
                    Treasure Chests : 
                    <input type="number" value={treasure} onChange={numValid}/>
                </p>
                <p>
                    Phrase : 
                    <input type="text"  value={phrase} onChange={(e) => setPhrase(e.target.value)}/>
                </p>
                <p>
                    Crew Position : 
                    <select value={position} onChange={(e) => setPosition(e.target.value)}>
                        <option value="Powder Monkey">Powder Monkey</option>
                        <option value="Quarter Master">Quarter Master</option>
                        <option value="Boatswain">Boatswain</option>
                        <option value="First Mate">First Mate</option>
                        <option value="Captain">Captain</option>

                    </select>
                </p>
                <p>
                    Peg Leg 
                    <input type="checkbox"  checked={pegleg} onChange={(e) => setPegLeg(e.target.checked)}/>
                </p>
                <p>
                    Eye Patch
                    <input type="checkbox"  checked={eyepatch} onChange={(e) => setEyePatch(e.target.checked)}/>
                </p>
                <p>
                    Hook Hand
                    <input type="checkbox"  checked={hookhand} onChange={(e) => setHookHand(e.target.checked)}/>
                </p>
                {
                    (nameError) ? <p>{nameError}</p> : null
                }
                {
                    (numError) ? <p>{numError}</p> : null
                }
                {
                    errors.map((error) => <p>{error}</p>)
                }
                <button> Create new Pirate</button>
            </form>
        </fieldset>
    )
}

export default Create
import React, { useState } from 'react'
import Create from '../components/Create'
import Dashboard from '../components/Dashboard';
import Edit from '../components/Edit';
import { Route, Routes } from 'react-router-dom';
import Details from './Details';



const Main = () => {

const[refresh, setRefresh] = useState(false)

const changeRefresh = () => setRefresh(!refresh)

    return (
        <fieldset>
            <legend>Main.jsx</legend>
            {/* <Create changeRefresh={changeRefresh}/> */}
            {/* <Dashboard /> */}
            <Routes>
                <Route path="/new/pirate" element ={<Create />}/>
                <Route path="/" element={<Dashboard refresh={refresh} changeRefresh={changeRefresh}/>}/>
                <Route path="/pirates/edit/:pirate_id" element={<Edit />}/>
                <Route path="/pirate/:pirate_id" element={<Details />}/>
            </Routes>
        </fieldset>
    )   
}

export default Main     
import React, { useState } from 'react'
import Create from '../components/Create'
import Dashboard from '../components/Dashboard';
import Edit from '../components/Edit';
import { Route, Routes } from 'react-router-dom';



const Main = () => {

const[refresh, setRefresh] = useState(false)

const changeRefresh = () => setRefresh(!refresh)

    return (
        <fieldset>
            <legend>Main.jsx</legend>
            <Create changeRefresh={changeRefresh}/>
            {/* <Dashboard refresh={refresh} changeRefresh={changeRefresh}/> */}
            <Routes>
        <Route path="/new/author" element ={<Create />}/>
        {/* <Route path="/" element={<Create />}/> */}
        <Route path="/" element={<Dashboard refresh={refresh} changeRefresh={changeRefresh}/>}/>
        {/* <Route path="/products/:product_id" element={<Details/>}/> */}
        <Route path="/authors/edit/:author_id" element={<Edit />}/>
        </Routes>
        </fieldset>
    )   
}

export default Main     
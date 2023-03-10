import React from 'react'
import { Route, Routes } from "react-router-dom"; //define different routes

import  Navbar from "./components/navbar";
import  RecordList from "./components/recordList";
import  Edit  from "./components/edit";
import  Create  from "./components/create";


const App = () => {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route exact path ="/" element={<RecordList />} />
            <Route exact path ="/edit/:id" element={<Edit />} />
            <Route exact path ="/create" element={<Create />} />
        </Routes>
    </div>
  )
}

export default App;
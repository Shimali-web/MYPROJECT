import React from "react";

import { NavLink, Route, Routes } from "react-router-dom";

import Add from "./Add";
import {Update} from "./Update";
import {Find} from "./Find";
import {Delete} from "./Delete";
import {FindAll} from "./FindAll";
import './App.css';




function App() {
 return (
   
     <div className="home">
      <header>
      <h2>Employee Management</h2>
            <nav>
              
        <NavLink to={"/Add"} className="nav-link">Add</NavLink>
          <NavLink to={"/Update"} className="nav-link">Update</NavLink>  
          <NavLink to={"/Delete"} className="nav-link">Delete</NavLink>
            <NavLink to={"/Find"} className="nav-link">Find</NavLink>
              <NavLink to={"/FindAll"} className="nav-link">Find All</NavLink>
      </nav>
     </header>

      <main>
      <Routes>
        
        <Route path="/Add" element={<Add/>}/>
        <Route path="/Update" element={<Update/>}/>
        <Route path="/Delete" element={<Delete/>}/>
        <Route path="/Find" element={<Find/>}/>
        <Route path="/FindAll" element={<FindAll/>}/>
      </Routes>
    </main>

    <footer>
        <p>&copy; 2025 Employee Management System. All rights reserved.</p>
      </footer>


    </div>
  )
}


export default App;

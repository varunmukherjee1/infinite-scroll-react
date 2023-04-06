import React from 'react';
import {Routes,Route} from "react-router-dom"

import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage/Homepage';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Users from './pages/Users/Users';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route
          path = "/"
          element = {
            <Homepage/>
          }
        />
        <Route
          path = "/login"
          element = {
            <Login/>
          }
        />
        <Route
          path = "/users"
          element = {
            <Users/>
          }
        />
        <Route
          path = "*"
          element = {
            <NotFound/>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

import React,{useState, useContext} from 'react';
import {Routes,Route} from "react-router-dom"
import { Toaster } from 'react-hot-toast';

// import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage/Homepage';
import NotFound from './pages/NotFound/NotFound';
import Users from './pages/Users/Users';
import Login from './pages/Login/Login';

import userContext from './store/user-context';

function App() {

  const user = useContext(userContext)

  return (
    <div className="App">
      <Toaster
        toastOptions={{
          className: '',
          style: {
            fontSize: "1.7rem",
            fontWeight: "500"
          },
        }}
      />
      <Routes>
        {
          (user.username === "none")? 
          <>
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
              path = "*"
              element = {
                <NotFound/>
              }
            />
          </>
            :
          <>
            <Route
              path = "/"
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
          </>
        }
        
      </Routes>
    </div>
  );
}

export default App;

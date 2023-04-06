import React,{useState} from 'react';
import {Routes,Route} from "react-router-dom"

import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage/Homepage';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Users from './pages/Users/Users';
import Modal from './components/Modal/Modal';

import classes from "./pages/Login/login.module.css"

function App() {

  const [showModal,setShowModal] = useState<boolean>(false);

  const closeModalHandler = () => {
      setShowModal(false);
  }

  const showModalHandler = () => {
      setShowModal(true);
  }

  return (
    <div className="App">
      <Navbar showModal = {showModalHandler}/>
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
      {showModal && <Modal onClose = {closeModalHandler}>
          <div className = {classes.content}>
              <p className = {classes.heading}>Login Here</p>
              <form>
                  <div className = {classes.input}>
                      <label htmlFor="username">Username</label>
                      <input type="text" id = "username"/>
                  </div>

                  <div className = {classes.input}>
                      <label htmlFor="passwd">Password</label>
                      <input type = "password" id = "passwd"/>
                  </div>

                  <button type="submit" className = {classes.submit}>Login</button>
              </form>
          </div>
      </Modal>}
    </div>
  );
}

export default App;

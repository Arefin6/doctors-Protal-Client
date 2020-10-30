import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AllPatients from './components/AllPatients/AllPatients';
import Appointment from './components/Appointment/Appointment/Appointment';
import DashBoard from './components/DashBoard/DashBoard/DashBoard';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';

export  const UserContext = createContext(); 

function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
        <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route  path="/appointment">
          <Appointment></Appointment>
        </Route>
        <PrivateRoute  path="/dashboard/appointment">
          <DashBoard></DashBoard>
        </PrivateRoute> 
        <PrivateRoute  path="/dashboard/allPatients">
          <AllPatients></AllPatients>
        </PrivateRoute>
        <Route  path="/login">
          <Login></Login>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
    
  );
}

export default App;

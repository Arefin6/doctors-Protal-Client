import React from 'react';
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

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route  path="/appointment">
          <Appointment></Appointment>
        </Route>
        <Route  path="/dashboard/appointment">
          <DashBoard></DashBoard>
        </Route> 
        <Route  path="/dashboard/allPatients">
          <AllPatients></AllPatients>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

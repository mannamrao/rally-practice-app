import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Signin from './routes/signin/signin';
import MedicoDetails from './routes/information/medico-details';
import Medicos from './routes/medicos/medicos';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">      
      <div className="page-container">
        <Router>
          <Switch>
            <Route path="/signin">
              <Signin />
            </Route>            
            <Route path="/medicos/:medicoId">
              <MedicoDetails />
            </Route>
            <Route path="/medicos">
              <Medicos />
            </Route>
            <Redirect to="/signin" />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;

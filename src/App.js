import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header'
import Main from './components/Main'
import Connexion from './components/Connexion'
import Inscription from './components/Inscription'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          
          <Route exact path='/'>
            <Header/>
            <Main/>
          </Route>

          <Route path='/connexion'>
            <Connexion/>
          </Route>

          <Route exact path='/inscription'>
            <Inscription/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;

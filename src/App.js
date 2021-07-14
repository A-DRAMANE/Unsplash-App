import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Col, Row} from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './components/Header'
import Main from './components/Main'
import Connexion from './components/Connexion'
import Inscription from './components/Inscription'

function App() {
  return (
    <Router>
      <Container className="App">
        <Switch>
          
          <Route exact path='/'>
            <Header/>
            <Main/>
          </Route>

          <Route path='/connection'>
            <Connexion/>
          </Route>

          <Route exact path='/inscription'>
            <Inscription/>
          </Route>

        </Switch>
      </Container>
    </Router>
  );
}

export default App;

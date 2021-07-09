import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Col, Row} from 'react-bootstrap'
import Header from './components/Header'

function App() {
  return (
    <Container className="App ">
      <Header/>
    </Container>
  );
}

export default App;

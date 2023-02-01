import React from 'react'
import InfoWeatherContainer from './components/containers/InfoWeatherContainer'
import { Container, Row, Col } from 'react-bootstrap'


function App() {

  return (
    <Container className="m-auto">
      <Row className="my-2">
        <Col ></Col>
        <Col md="auto">
          <InfoWeatherContainer />
        </Col>
        <Col></Col>
      </Row>

    </Container>
  )
}

export default App

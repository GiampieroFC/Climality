import React, { useState, useEffect, useRef } from 'react'
import IW from '../../models/response.class'
import getInfoWeatherCity from '../../models/request.city'
import InfoWeather from '../pures/infoWeather'
import { Container, Row, Col, InputGroup, Form, Button, Stack, Modal } from 'react-bootstrap'
import Waiting from '../pures/Waiting'
import { Helmet } from "react-helmet";

function InfoWeatherContainer() {

    const [p, setP] = useState({})
    const [city, setCity] = useState("")
    const [loc, setLoc] = useState(false)
    const [show, setShow] = useState(true);

    const myLoc = useRef()


    function pr(e) {
        if (e.target.value.length > 2) {
            setCity(e.target.value)
        }
    }

    function myLocation() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                let lat = position.coords.latitude
                let lon = position.coords.longitude
                let a = lat + "," + lon
                // console.log("success:", a);
                setCity(a)
                myLoc.current.value = a
            },
            () => {
                setLoc(true)
                setShow(true)
                console.log(myLoc.current);
                // myLoc.current.value = t.message
            }, {
            enableHighAccuracy: true
        }

        )
    }

    useEffect(() => {
        getInfoWeatherCity(city)
            .then(jsn => new IW(jsn))
            .then(obj => {
                setP(obj)
            })
        console.log(city);
    }, [city, loc, show])


    return (
        <Container className="my-bg min-vh-100" fluid>
            <div className="snow">
                <div className="flake"> {p?.condition?.icon ? <img src={p.condition.icon} /> : '😎'} </div>
                <div className="flake"> {p?.condition?.icon ? <img src={p.condition.icon} /> : '😎'} </div>
                <div className="flake"> {p?.condition?.icon ? <img src={p.condition.icon} /> : '😎'} </div>
                <div className="flake"> {p?.condition?.icon ? <img src={p.condition.icon} /> : '😎'} </div>
                <div className="flake"> {p?.condition?.icon ? <img src={p.condition.icon} /> : '😎'} </div>
                <div className="flake"> {p?.condition?.icon ? <img src={p.condition.icon} /> : '😎'} </div>
                <div className="flake"> {p?.condition?.icon ? <img src={p.condition.icon} /> : '😎'} </div>
                <div className="flake"> {p?.condition?.icon ? <img src={p.condition.icon} /> : '😎'} </div>
                <div className="flake"> {p?.condition?.icon ? <img src={p.condition.icon} /> : '😎'} </div>
                <div className="flake"> {p?.condition?.icon ? <img src={p.condition.icon} /> : '😎'} </div>
            </div>

            {
                Object.keys(p).length ?
                    <Helmet>
                        <meta charset="UTF-8" />
                        <link rel="icon" type="image/png" href={p?.condition?.icon} />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <title>{p?.city + ' | ' + p?.localtime?.split(' ')[1] + 'h' + ' | ' + p?.temp + 'ºC' + ' | Climality'}</title>
                    </Helmet>
                    :
                    <Helmet>
                        <meta charset="UTF-8" />
                        <link rel="icon" type="image/png" href="/weather-forecast.png" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <title>Climality</title>
                    </Helmet>
            }

            <Container className="d-flex justify-content-center align-items-center">
                <Row className='d-flex justify-content-center align-items-center flex-grow-1'>
                    <Col >
                        <Stack direction="horizontal" className='d-flex justify-content-center align-items-center' gap={3}>


                            <div>

                                <InputGroup className='my-2' border="success">
                                    <InputGroup.Text>City: </InputGroup.Text>
                                    <Form.Control onChange={pr} ref={myLoc} />
                                    <Button variant="primary" onClick={myLocation}>
                                        📍 Get my location
                                    </Button>
                                </InputGroup>


                                {
                                    loc
                                    &&
                                    <Modal show={show} onHide={() => setShow(false)}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>😣 Oops...</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>You have to activate your location 📍 to be able to tell you the weather in your city. Otherwise, just type the name of your city in the text box</Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="primary" onClick={() => setShow(false)}>
                                                Close
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>

                                }
                                {
                                    Object.keys(p).length
                                        ? <InfoWeather props={p} />
                                        : <Waiting />
                                }

                            </div>
                        </Stack>
                    </Col >
                </Row >

            </Container >
        </Container >
    )
}

export default InfoWeatherContainer
import React, { useState, useEffect, useRef } from 'react'
import IW from '../../models/response.class'
import getInfoWeatherCity from '../../models/request.city'
import InfoWeather from '../pures/infoWeather'
import { Spinner, InputGroup, Form, Button } from 'react-bootstrap'
import ModalGPS from '../pures/Modal'

function InfoWeatherContainer() {

    const [p, setP] = useState({})
    const [city, setCity] = useState("")
    const [loc, setLoc] = useState(false)

    const myLoc = useRef()


    function pr(e) {
        if (e.target.value.length > 2) {
            setCity(e.target.value)
        }
    }

    function myLocation(e) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                let lat = position.coords.latitude
                let lon = position.coords.longitude
                let a = lat + "," + lon
                console.log("success:", a);
                setCity(a)
                myLoc.current.value = a
            },
            (t) => {
                setLoc(true)
                console.log(myLoc.current);
                myLoc.current.value = t.message
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
    }, [city, loc])


    return (
        <>
            <InputGroup className='my-2' border="success">
                <InputGroup.Text>City: </InputGroup.Text>
                <Form.Control onChange={pr} ref={myLoc} />
                <Button variant="outline-secondary" onClick={myLocation}>
                    📍 Get my location
                </Button>
            </InputGroup>



            {
                Object.keys(p).length
                    ? <InfoWeather props={p} />
                    : loc
                        ? <ModalGPS
                            title={"😣 Oops..."}
                            text={"You have to activate your location 📍 to be able to tell you the weather in your city. Otherwise, just type the name of your city in the text box"}
                        />
                        : <div className='m-auto'>. . . <Spinner animation="border" variant="success" /></div>
            }
        </>
    )
}

export default InfoWeatherContainer
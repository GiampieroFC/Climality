import React from 'react'
import PropTypes from 'prop-types'
import IW from '../../models/response.class'
import { Card, ListGroup, ListGroupItem, Stack } from 'react-bootstrap'

function InfoWeather({ props }) {

    return (
        <Card border="success">
            <Card.Header>{props.country}</Card.Header>
            <Card.Body>
                <Card.Title>

                    <Stack direction="horizontal" gap={3}>
                        <div className='fs-1'>{props.temp}ºC</div>
                        <div className="ms-auto"><img src={props.condition.icon} /></div>
                    </Stack>

                </Card.Title>
                <Card.Subtitle>
                    <div className='fs-3'>
                        {props.city}
                    </div>
                </Card.Subtitle>
                <Card.Text>
                    {props.condition.text}
                </Card.Text>
            </Card.Body>
            <ListGroup flush>
                <ListGroupItem>
                    <p className='text-center fw-bold'>
                        🤔 But feels like:
                    </p>
                    <Stack direction="horizontal" gap={3}>
                        <div className="m-auto">
                            💁‍♀️: {props.temp_feels}ºC
                        </div>
                    </Stack>
                </ListGroupItem>
                <ListGroupItem >
                    <p className='text-center fw-bold'>
                        🌡 Max/Min:
                    </p>

                    <Stack direction="horizontal" gap={3}>
                        <div >🥵: {props.temp_max}ºC</div>
                        <div className="ms-auto">🥶: {props.temp_min}ºC</div>
                    </Stack>
                </ListGroupItem>
                <ListGroupItem>
                    <p className='text-center fw-bold'>
                        🌊 Humidity and wind:
                    </p>

                    <Stack direction="horizontal" gap={3}>
                        <div >💦: {props.humidity}%</div>
                        <div className="ms-auto">💨: {props.wind} km/h</div>
                    </Stack>

                </ListGroupItem>
                <ListGroupItem>

                    <p className='text-center fw-bold'>
                        ⏳ Local Time::
                    </p>

                    <Stack direction="horizontal" gap={3}>
                        <div >📅{props.localtime.split(' ')[0]}</div>
                        <div className="ms-auto">🕔{props.localtime.split(' ')[1]}h</div>
                    </Stack>
                </ListGroupItem>
            </ListGroup>
        </Card>
    )
}

InfoWeather.propTypes = {
    props: PropTypes.instanceOf(IW)
}

export default InfoWeather

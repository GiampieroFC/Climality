
import { Card, ListGroup, ListGroupItem, Stack } from 'react-bootstrap'

function Waiting() {

    return (
        <Card border="success">
            <Card.Body>
                <Card.Title>

                    <Stack direction="horizontal" gap={3}>
                        <div className='fs-1'>Write 👆 here the city</div>
                        <div className="ms-auto"><img src={' '} /></div>
                    </Stack>

                </Card.Title>


            </Card.Body>

        </Card>
    )
}


export default Waiting

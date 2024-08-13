import Button from 'react-bootstrap/Button';
import "./Product.css";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import natsu from '../Image/dock.jpeg'
import tanjero from '../Image/oooo.jpeg'
import sukuna from '../Image/hhhh.jpeg'





function BasicExample() {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg="4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={natsu} className='img-fluid brand-log' />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary" className='Change-1'>Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="4">
                        <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={tanjero} className='img-fluid brand-log' />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary" className='Change'>Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="4">
                        <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={sukuna} className='img-fluid brand-log' />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary" className='Change'>Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>

    );
}

export default BasicExample;
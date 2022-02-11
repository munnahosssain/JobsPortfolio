import './Services.css'
import react from '../images/react.png';
import wordpress from '../images/wordpress.jpg';
import responsive from '../images/responsive.png';
import { Card, Col, Container, Row } from 'react-bootstrap';


const serviceCard = [
    {
        title: 'Responsive Design',
        img: responsive,
        subTitle: 'I will create web site that are consistent in quality across a variety of devices and screen sizes.',
    },
    {
        title: 'React App',
        img: react,
        subTitle: 'Your website will be build with an new proven technologies.',
    },
    {
        title: 'Wordpress Design',
        img: wordpress,
        subTitle: 'Your website will be build with wordpress technologies.',
    },
]

const Services = () => {
    return (
        <div className="services-part">
            <div id="services" className="service">
                <Container>
                    <h3 className="shared-heading mt-5 mb-5">What i'm doing</h3>
                    <Row md={3} className="g-4">
                        {
                            serviceCard.map((service) =>
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src={service.img} className="service-img" />
                                        <Card.Body>
                                            <Card.Title>{service.title}</Card.Title>
                                            <Card.Text>{service.subTitle}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        }
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Services;
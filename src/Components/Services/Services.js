import './Services.css';
import responsive from '../images/responsive.gif';
import Development from '../images/Development.gif';
import wordpress from '../images/wordpress.gif';
import { Card, Col, Container, Row } from 'react-bootstrap';


const serviceCard = [
    {
        img: responsive,
        title: 'Responsive Design',
        subTitle: 'PSD/Figma/Sketch to HTML fully responsive web design, Professional design awesome looking custom webpage design with HTML5, CSS3, Bootstrap5 and jQuery. All browser comfortable, clean and organized code.',
    },
    {
        img: Development,
        title: 'Web Development',
        subTitle: 'Your website will be build with an new proven technologies. Build high iterative React Web App. Full responsive and attractive design with Material-UI.',
    },
    {
        img: wordpress,
        title: 'Wordpress Design',
        subTitle: 'Your website will be build with wordpress technologies. Wordpress theme customization. Professional looking user attractive fully responsive.',
    },
]

const Services = () => {
    return (
        <div id="services" className="service">
            <Container>
                <h3 className="shared-heading mt-5">What i'm doing</h3>
                <p className="shared-sub-heading text-white">I love what I do. I take great pride in what I do.</p>
                <Row md={3} className="g-4">
                    {
                        serviceCard.map((service) =>
                            <Col>
                                <Card.Img variant="top" src={service.img} className="service-img" />
                                <Card.Body>
                                    <h3 className="service-title">{service.title}</h3>
                                    <p className="title-details">{service.subTitle}</p>
                                </Card.Body>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;
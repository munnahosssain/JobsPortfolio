import './Services.css';
import responsive from '../images/responsive.gif';
import Development from '../images/Development.gif';
import wordpress from '../images/wordpress.gif';
import { Container } from 'react-bootstrap';


const serviceCard = [
    {
        id: 1,
        img: responsive,
        title: 'Responsive Design',
        subTitle: 'PSD/Figma/Sketch to HTML fully responsive web design, Professional design awesome looking custom webpage design with HTML5, CSS3, Bootstrap5 and jQuery. All browser comfortable, clean and organized code.',
    },
    {
        id: 2,
        img: Development,
        title: 'Web Development',
        subTitle: 'Your website will be build with an new proven technologies. Build high iterative React Web App. Full responsive and attractive design with Material-UI.',
    },
    {
        id: 3,
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
                <p className="shared-sub-heading text-black">I love what I do. I take great pride in what I do.</p>
                <div className="service-card ">
                    {
                        serviceCard.map((service) =>
                            <div className="card-wrap shadow">
                                <img className="img-fluid service-img" src={service.img} alt="..." />
                                <h5 className="service-p-h3">{service.title}</h5>
                                <p className="service-p-h3">{service.subTitle}</p>
                            </div>
                        )
                    }
                </div>
            </Container>
        </div>
    );
};

export default Services;
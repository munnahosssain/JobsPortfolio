import './Contact.css'
import React, { useState } from 'react';
import { Card, CardGroup, Col, Container, FloatingLabel, Form } from 'react-bootstrap';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [message, setMessage] = useState(false);
    function mailSend(e) {
        setMessage(true);
        e.preventDefault();
        emailjs.sendForm(
            "service_94adtjp",
            "template_x1g2q4v",
            e.target,
            "user_xfNUhs20vrnGuuvf3BodL"
        )
            .then(res => {
                console.log(res.text);
            })
            .catch(err => console.log(err.text));
    }

    return (
        <div id="container" className="contact-wrapper">
            <Container>
                <div id="contact">
                    <h2 className="shared-heading">Get in touch</h2>
                    <p className="text-center">Please fill out the form and describe your project needs and I'll contact you as soon as possible.</p>
                    <Form onSubmit={mailSend}>
                        <CardGroup>
                            <Col>
                                <Form.Group className="p-2 mb-3" as={Col} controlId="formGridEmail">
                                    <Form.Control type="text" name="name" placeholder="Name" required />
                                </Form.Group>
                                <Form.Group className="p-2 mb-3" controlId="formGridAddress1">
                                    <Form.Control type="number" name="number" placeholder="Phone Number" required />
                                </Form.Group>
                                <Form.Group className="mb-3 p-2" controlId="formGridAddress2">
                                    <Form.Control type="email" name="email" placeholder="Email" required />
                                </Form.Group>
                                <Form.Group className="mb-3 p-2" controlId="formGridAddress2">
                                    <Form.Control name="subject" placeholder="Subject" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Card.Body>
                                    <FloatingLabel controlId="floatingTextarea2" label="Please describe shortly your project.">
                                        <Form.Control
                                            name="message"
                                            as="textarea"
                                            placeholder="Leave a comment here"
                                            style={{ height: '150px' }}
                                            required
                                        />
                                    </FloatingLabel>
                                    <div className="d-grid mt-3">
                                        <button type="submit" className="contact-button" size="lg">Submit</button>
                                        {
                                            message && <p className="status text-center mt-2">Thanks, I'll replay ASAP :)</p>
                                        }
                                    </div>
                                </Card.Body>
                            </Col>
                        </CardGroup>
                    </Form>
                </div>
            </Container>
        </div>
    );
};

export default Contact;
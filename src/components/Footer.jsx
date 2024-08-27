import React from 'react';
import './styles/Footer.css';
import { Col, Row } from 'react-bootstrap';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-content container">
                <div className="row">
                    <div className="footer-left col-lg-3 col-md-6">
                        <strong className="brand">CastME</strong>
                    </div>
                    <div className="footer-columns col-lg-9 col-md-6" style={{ marginBottom: "100px" }}>
                        <div className="row">
                            <div className="footer-column col-lg-4 col-md-6 col-sm-12">
                                <h4>Column One</h4>
                                <ul>
                                    <li><a href="#link1">Link One</a></li>
                                    <li><a href="#link2">Link Two</a></li>
                                    <li><a href="#link3">Link Three</a></li>
                                    <li><a href="#link4">Link Four</a></li>
                                    <li><a href="#link5">Link Five</a></li>
                                </ul>
                            </div>
                            <div className="footer-column col-lg-4 col-md-6 col-sm-12">
                                <h4>Column Two</h4>
                                <ul>
                                    <li><a href="#link6">Link Six</a></li>
                                    <li><a href="#link7">Link Seven</a></li>
                                    <li><a href="#link8">Link Eight</a></li>
                                    <li><a href="#link9">Link Nine</a></li>
                                    <li><a href="#link10">Link Ten</a></li>
                                </ul>
                            </div>
                            <div className="footer-column col-lg-4 col-md-12">
                                <h4>Follow Us</h4>
                                <ul className="social-links">
                                    <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook social-icon"></i> Facebook</a></li>
                                    <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram social-icon"></i> Instagram</a></li>
                                    <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter social-icon"></i> X</a></li>
                                    <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin social-icon"></i> LinkedIn</a></li>
                                    <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-youtube social-icon"></i> YouTube</a></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <Row className="footer-bottom container">
                    <Col>
                        <p className="footer-left-bottom">©2024 INFOLITZ All rights reserved.</p>
                    </Col>
                    <Col className="footer-right-bottom d-flex justify-content-end">
                        <a href="#privacy">Privacy Policy</a>
                        <a href="#terms">Terms of Service</a>
                        <a href="#cookies">Cookies Settings</a>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Footer;
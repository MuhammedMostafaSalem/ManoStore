import React from 'react'
import './Footer.css'
import {Col, Row} from 'react-bootstrap';
import paymentImg from '../../../Images/payment.png';

const Footer = () => {

    const year = new Date().getFullYear()

    return (
        <div className='footer'>
            <div className='top'>
                <Row>
                    <Col lg='3' md='6' sm='12'>
                        <div className='itemTop'>
                            <h5>category</h5>
                            <span>women</span>
                            <span>men</span>
                            <span>shoes</span>
                            <span>accessories</span>
                            <span>new arrivals</span>
                        </div>
                    </Col>
                    <Col lg='3' md='6' sm='12'>
                        <div className='itemTop'>
                            <h5>links</h5>
                            <span>FAQ</span>
                            <span>pages</span>
                            <span>stores</span>
                            <span>compare</span>
                            <span>cookies</span>
                        </div>
                    </Col>
                    <Col lg='3' md='6' sm='12'>
                        <div className='itemTop'>
                            <h5>About</h5>
                            <span>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt autem reiciendis temporibus optio nisi, expedita explicabo. In dolore dicta quidem.
                            </span>
                        </div>
                    </Col>
                    <Col lg='3' md='6' sm='12'>
                        <div className='itemTop'>
                            <h5>Contact</h5>
                            <span>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt autem reiciendis temporibus optio nisi, expedita explicabo. In dolore dicta quidem.
                            </span>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className='footer_bottom'>
                <div className='border-top d-flex justify-content-between'>
                    <div className='footer_bottom_left d-flex'>
                        <div className='footer_logo'>ManoStore</div>
                        <div className='footer_copyRight'>copyright &copy;{year} developed by muhammed mostafa.</div>
                    </div>
                    <img className='footer_bottom_right' src={paymentImg} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Footer
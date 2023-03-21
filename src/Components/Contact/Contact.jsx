import React from 'react'
import './Contact.css'
import { Col, Row } from 'react-bootstrap'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Contact = () => {
    return (
        <div className="contact">
            <Row>
                <Col md='6' sm='12'>
                    <div className='div_wrapper'>
                        <span>BE IN TOUCH WITH US:</span>
                        <div className="mail">
                            <input type="text" placeholder="Enter your e-mail..." />
                            <button>JOIN US</button>
                        </div>
                    </div>
                </Col>
                <Col md='6' sm='12'>
                    <div className="contactIcons">
                        <FacebookIcon />
                        <InstagramIcon />
                        <TwitterIcon />
                        <GoogleIcon />
                        <PinterestIcon />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Contact
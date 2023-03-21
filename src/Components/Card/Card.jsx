import React from 'react'
import './Card.css'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Card = ({item}) => {
    return (
        <Col lg='3' md='6' sm='6' xs='12'>
            <Link className='link' to={`/product/${item.id}`}>
                <div className='card'>
                    <div className='image'>
                        {item.isNew  && <span>New Season</span>}
                        <img src={item.img} className='mainImg' alt=''/>
                        <img src={item.img2} className='secondImg' alt=''/>
                    </div>
                    <div className='cardBody'>
                        <h2>{item.title}</h2>
                        <div className='prices'>
                            <h3>{item.oldPrice}</h3>
                            <h3>{item.price}</h3>
                        </div>
                    </div>
                </div>
            </Link>
        </Col>
    )
}

export default Card
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
                        {item?.attributes.isNew  && <span>New Season</span>}
                        <img src={process.env.REACT_APP_UPLOAD_URL+item.attributes?.img?.data?.attributes?.url} className='mainImg' alt=''/>
                        <img src={process.env.REACT_APP_UPLOAD_URL+item.attributes?.img2?.data?.attributes?.url} className='secondImg' alt=''/>
                    </div>
                    <div className='cardBody'>
                        <h2>{item?.attributes.title}</h2>
                        <div className='prices'>
                            <h3>$ {item.oldPrice || item?.attributes.price + 20}</h3>
                            <h3>$ {item?.attributes.price}</h3>
                        </div>
                    </div>
                </div>
            </Link>
        </Col>
    )
}

export default Card
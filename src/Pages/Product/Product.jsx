import React, { useState } from 'react'
import './Product.css'
import { Col, Row } from 'react-bootstrap';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

const Product = () => {

    const images = [
        'https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&cs=tinysrgb&w=1600&lazy=load',
        'https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    ];


    const [selectedImg, setSelectedImg] = useState(0);
    const [quantity, setQuatity] = useState(1);



    return (
        <div className='product'>
            <Row>
                <Col md='6' sm='12'>
                    <div className='product_left'>
                        <Row>
                            <Col md='4' sm='12'>
                                <div className='product_image'>
                                    <img src={images[0]} alt='' onClick={e => setSelectedImg(0)}/>
                                    <img src={images[1]} alt='' onClick={e => setSelectedImg(1)}/>
                                </div>
                            </Col>
                            <Col md='8' sm='12'>
                                <div className='main_img'>
                                    <img src={images[selectedImg]} alt=''/>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>

                <Col md='6' sm='12'>
                    <div className='product_right'>
                        <h3 className='title'>title</h3>

                        <span className='price'>$199</span>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.
                        </p>

                        <div className='quantity'>
                            <div className='btn btn-primary decreaseBtn' onClick={() => setQuatity(prev => prev === 1 ? 1 : prev -1)}>
                                <RemoveIcon/>
                            </div>
                            <span>{quantity}</span>
                            <div className='btn btn-primary increaseBtn' onClick={() => setQuatity(next => next + 1)}>
                                <AddIcon/>
                            </div>
                        </div>

                        <div className='btn btn-primary add_btn'>
                            <ShoppingCartOutlinedIcon/>
                            <p>add to cart</p>
                        </div>

                        <div className='linkProduct'>
                            <div className='itemProduct btn'>
                                <FavoriteBorderIcon/>
                                <p>add to wish list</p>
                            </div>
                            <div className='itemProduct btn'>
                                <BalanceIcon/>
                                <p>add to compare</p>
                            </div>
                        </div>

                        <div className="info info1">
                            <span>Vendor: Polo</span>
                            <span>Product Type: T-Shirt</span>
                            <span>Tag: T-Shirt, Women, Top</span>
                        </div>

                        <div className="info">
                            <span>description</span>
                            <span>additional information</span>
                            <span>FAQ</span>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Product
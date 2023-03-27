import React, { useState } from 'react'
import './Product.css'
import { Col, Row } from 'react-bootstrap';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import useFetch from '../../Hooks/useFetch';
import { useParams } from 'react-router-dom';

const Product = () => {
    const id = useParams().id;
    const [selectedImg, setSelectedImg] = useState("img");
    const [quantity, setQuatity] = useState(1);

    const {data, loading, error} = useFetch(
        `/products/${id}?populate=*`
    );


    return (
        <div className='product'>
        {
            loading ? "loading ..." :
            <Row>
                <Col md='6' sm='12'>
                    <div className='product_left'>
                        <Row>
                            <Col md='4' sm='12'>
                                <div className='product_image'>
                                    <img src={process.env.REACT_APP_UPLOAD_URL +data?.attributes?.img?.data?.attributes?.url} alt='' onClick={e => setSelectedImg("img")}/>
                                    <img src={process.env.REACT_APP_UPLOAD_URL +data?.attributes?.img2?.data?.attributes?.url} alt='' onClick={e => setSelectedImg("img2")}/>
                                </div>
                            </Col>
                            <Col md='8' sm='12'>
                                <div className='main_img'>
                                    <img src={process.env.REACT_APP_UPLOAD_URL +data?.attributes[selectedImg]?.data?.attributes?.url} alt=''/>
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
        }
        </div>
    )
}

export default Product
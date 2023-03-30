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
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';

const Product = () => {
    const id = useParams().id;
    const [selectedImg, setSelectedImg] = useState("img");
    const [quantity, setQuatity] = useState(1);
    const dispatch = useDispatch();

    const {data, loading} = useFetch(
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
                        <h3 className='title'>{data?.attributes?.title}</h3>

                        <span className='price'>${data?.attributes?.price}</span>

                        <p>
                            {data?.attributes?.desc}
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

                        <div
                            className='btn btn-primary add_btn'
                            onClick={() => dispatch(addToCart(
                                {
                                    id: data.id,
                                    title: data.attributes.title,
                                    desc: data.attributes.desc,
                                    price: data.attributes.price,
                                    img: data.attributes.img.data.attributes.url,
                                    quantity,
                                }
                            ))}>
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
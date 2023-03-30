import React from 'react'
import './Cart.css'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../redux/slices/cartSlice';

const Cart = () => {
    const products = useSelector((state) => state.cart.products);
    const dispatch = useDispatch();
    
    const totalPrice = () => {
        let total = 0;
        products.forEach((item) => {
          total += item.quantity * item.price;
        });
        return total.toFixed(2);
    };

    return (
        <div className='cart'>
            <h3>Products in your cart</h3>
            {
                products.map((item)=> {
                    return (
                        <div className='cartItem' key={item.id}>
                            <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt='' />
                            <div className='details'>
                                <h6>{item.title}</h6>
                                <p>{item.desc.substring(0, 100)}</p>
                                <div className="cartPrice">
                                    {item.quantity} x ${item.price}
                                </div>
                            </div>
                            <DeleteOutlineIcon className="cartDelete" onClick={()=> dispatch(removeItem(item.id))}/>
                        </div>
                    )
                })
            }

            <div className="cartTotal">
                <span>subTotal</span>
                <span>$ {totalPrice()}</span>
            </div>

            <div className='btn btn-primary'>
                proceed to checkout
            </div>

            <span className="cartReset"  onClick={()=> dispatch(resetCart())}>
                Reset Cart
            </span>
        </div>
    )
}

export default Cart
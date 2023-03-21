import React from 'react'
import './Cart.css'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Cart = () => {

    const data = [
        {
            id: 1,
            img: 'https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600',
            img2: 'https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'Long Sleeve Graphic Tishirt',
            isNew: true,
            oldPrice: 19,
            price: 12,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
            id: 2,
            img: 'https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'Coat',
            isNew: true,
            oldPrice: 19,
            price: 12,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
    ]

    return (
        <div className='cart'>
            <h3>Products in your cart</h3>
            {
                data.map((item)=> {
                    return (
                        <div className='cartItem' key={item.id}>
                            <img src={item.img} alt='' />
                            <div className='details'>
                                <h6>{item.title}</h6>
                                <p>{item.desc.substring(0, 100)}</p>
                                <div className="cartPrice">
                                    {item.quantity} x ${item.price}
                                </div>
                            </div>
                            <DeleteOutlineIcon className="cartDelete" />
                        </div>
                    )
                })
            }

            <div className="cartTotal">
                <span>subTotal</span>
                <span>$123</span>
            </div>

            <div className='btn btn-primary'>
                proceed to checkout
            </div>

            <span className="cartReset">
                Reset Cart
            </span>
        </div>
    )
}

export default Cart
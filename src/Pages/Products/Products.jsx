import React from 'react'
import './Products.css'
import FilterProducts from '../../Components/products/FilterProducts'
import CardContainer from '../../Components/Card/CardContainer'

const Products = () => {
    return (
        <div className='products'>
            <div className='sideLeft'>
                <FilterProducts/>
            </div>
            <div className='sideRight'>
                <div className='sideRight_img'>
                    <img
                        className="catImg"
                        src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt=""
                    />
                </div>
                <CardContainer/>
            </div>
        </div>
    )
}

export default Products
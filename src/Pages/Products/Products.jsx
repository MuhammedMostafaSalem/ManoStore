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
                <CardContainer/>
            </div>
        </div>
    )
}

export default Products
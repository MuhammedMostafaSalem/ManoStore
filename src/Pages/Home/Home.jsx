import React from 'react'
import FeaturedProducts from '../../Components/Featured Products/FeaturedProducts'
import Slider from '../../Components/Slider/Slider'

const Home = () => {
    return (
        <div className='home'>
            <Slider/>
            <FeaturedProducts />
        </div>
    )
}

export default Home
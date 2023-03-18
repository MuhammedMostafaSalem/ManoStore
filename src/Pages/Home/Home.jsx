import React from 'react'
import FeaturedProducts from '../../Components/Featured Products/FeaturedProducts'
import Slider from '../../Components/Slider/Slider'
import Subtitle from '../../Components/Utility/Subtitle/Subtitle'

const Home = () => {
    return (
        <div className='home'>
            <Slider/>
            <div className='featured_products'
                style={{
                    marginTop: '100px',
                    padding: '0 150px'
                }}
            >
                <Subtitle
                    title='featured products'
                    decription= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas."
                />
                <FeaturedProducts />
            </div>
        </div>
    )
}

export default Home
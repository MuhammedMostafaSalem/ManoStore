import React from 'react'
import './Home.css'
import Categories from '../../Components/Categories/Categories'
import FeaturedProducts from '../../Components/Featured Products/FeaturedProducts'
import Slider from '../../Components/Slider/Slider'
import Subtitle from '../../Components/Utility/Subtitle/Subtitle'
import Contact from '../../Components/Contact/Contact'

const Home = () => {
    return (
        <div className='home'>
            <Slider/>
            <div className='featured_products_section'>
                <Subtitle
                    title='featured products'
                    decription= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas."
                />
                <FeaturedProducts  type="featured" />
            </div>
            <Categories/>
            <div className='featured_products_section'>
                <Subtitle
                    title='trending products'
                    decription= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas."
                />
                <FeaturedProducts  type="trending" />
            </div>
            <Contact/>
        </div>
    )
}

export default Home
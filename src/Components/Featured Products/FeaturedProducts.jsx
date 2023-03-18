import React from 'react'
import { Row } from 'react-bootstrap'
import Card from '../Card/Card'
import Subtitle from '../Utility/Subtitle/Subtitle'
import './FeaturedProducts.css'

const FeaturedProducts = () => {

    const data = [
        {
            id: 1,
            img: 'https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600',
            img2: 'https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'Long Sleeve Graphic Tishirt',
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: 'https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'Coat',
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 3,
            img: 'https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'Skirt',
            oldPrice: 19,
            price: 12,
        },
        {
            id: 4,
            img: 'https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'Hat',
            oldPrice: 19,
            price: 12,
        },
    ]

    return (
        <div className='featuredProducts'>
            <div className='top'>
                <Subtitle
                    title='featured products'
                    decription= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas."
                />
            </div>
            <div className='bottom'>
                <Row>
                    {
                        data.map((item)=> {
                            return(
                                <Card item={item} key={item.id}/>
                            )
                        })
                    }
                </Row>
            </div>
        </div>
    )
}

export default FeaturedProducts
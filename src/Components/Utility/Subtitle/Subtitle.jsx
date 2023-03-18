import React from 'react'
import './Subtitle.css'

const Subtitle = ({title, decription}) => {
    return (
        <div className='subTitle'>
            <h2>{title}</h2>
            <h6>{decription}</h6>
        </div>
    )
}

export default Subtitle
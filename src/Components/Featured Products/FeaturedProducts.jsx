import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Row } from 'react-bootstrap'
import Card from '../Card/Card'
import './FeaturedProducts.css'

const FeaturedProducts = () => {

    const [data, setData] = useState([]);

    useEffect(()=> {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    process.env.REACT_APP_API_URL + "/products?populate=*",
                    {
                        headers: {
                            Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
                        },
                    },
                );
                setData(res.data.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);
    

    return (
        <div className='featuredProducts'>
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
    )
}

export default FeaturedProducts
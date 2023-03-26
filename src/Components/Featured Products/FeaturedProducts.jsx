import React from 'react'
import { Row } from 'react-bootstrap'
import Card from '../Card/Card'
import './FeaturedProducts.css'
import useFetch from '../../Hooks/useFetch';

const FeaturedProducts = ({type}) => {
    // useEffect(()=> {
    //     const fetchData = async () => {
    //         try {
    //             const res = await axios.get(
    //                 process.env.REACT_APP_API_URL + `/products?populate=*&[filters][type][$eq]=${type}`,
    //                 {
    //                     headers: {
    //                         Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
    //                     },
    //                 },
    //             );
    //             setData(res.data.data);
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     };
    //     fetchData();
    // });
    const {data, loading, error} = useFetch(
        `/products?populate=*&[filters][type][$eq]=${type}`
    );

    return (
        <div className='featuredProducts'>
            <Row>
                {
                    error ? 'Something went wrong!' : loading ? 'loading ...' :
                    data?.map((item)=> {
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
import React from 'react'
import { Row } from 'react-bootstrap';
import useFetch from '../../Hooks/useFetch';
import Card from '../Card/Card';

const CardContainer = ({catId, maxPrice, sort, subCats}) => {
    
    const {data, loading, error} = useFetch(
        `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(item => `&[filters][sub_categories][id][$eq]=${item}`)}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
    );

    return (
        <div className='list'>
            <Row>
                {
                    loading ?
                    "loading ..." :
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

export default CardContainer
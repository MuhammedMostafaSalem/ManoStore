import React, { useState } from 'react'
import './Products.css'
// import FilterProducts from '../../Components/products/FilterProducts'
import CardContainer from '../../Components/Card/CardContainer'
import { useParams } from 'react-router-dom'
import useFetch from '../../Hooks/useFetch'

const Products = () => {
    const catId = parseInt(useParams().id);
    const [maxPrice, setMaxPrice] = useState(1000);
    const [sort, setSort] = useState(null);
    const [selectedSubCats, setSelectedSubCats] = useState([])

    const {data, loading, error} = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`);
    
    const handleChange = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;

        setSelectedSubCats(
            isChecked
            ?
            [...selectedSubCats, value]
            : selectedSubCats.filter(item => item !== value)
        )
    }
    console.log(selectedSubCats)

    return (
        <div className='products'>
            <div className='sideLeft'>
                <div className='filter_products'>
                    <div className='filter_item'>
                        <h4 className='text-capitalize'>product categories</h4>
                        {
                            data?.map((item)=> {
                                return (
                                    <div className='inputItem text-capitalize' key={item.id}>
                                        <input type='checkbox' id={item.id} value={item.id} onChange={handleChange} />
                                        <label htmlFor={item.id}>{item.attributes.title}</label>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='filter_item'>
                        <h4 className='text-capitalize'>filter by price</h4>
                        <div className='inputItem'>
                            <span>0</span>
                            <input type='range' min={0} max={1000} onChange={(e)=> setMaxPrice(e.target.value)} />
                            <span>{maxPrice}</span>
                        </div>
                    </div>
                    <div className='filter_item'>
                        <h4 className='text-capitalize'>sort by</h4>

                        <div className='inputItem text-capitalize'>
                            <input type="radio" id="asc" value="asc" name="price" onChange={(e)=> setSort("asc")} />
                            <label htmlFor="asc">Price (Lowest first)</label>
                        </div>
                        <div className='inputItem text-capitalize'>
                            <input type="radio" id="asc" value="asc" name="price" onChange={(e)=> setSort("desc")} />
                            <label htmlFor="asc">Price (Highest first)</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sideRight'>
                <div className='sideRight_img'>
                    <img
                        className="catImg"
                        src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt=""
                    />
                </div>
                <CardContainer catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats} />
            </div>
        </div>
    )
}

export default Products
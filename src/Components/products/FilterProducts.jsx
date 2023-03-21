import React from 'react'
import './FilterProducts.css'

const FilterProducts = () => {
    return (
        <div className='filter_products'>
            <div className='filter_item'>
                <h4 className='text-capitalize'>product categories</h4>
                <div className='inputItem text-capitalize'>
                    <input type='checkbox' id='1' value={1} />
                    <label htmlFor='1'>shoes</label>
                </div>
                <div className='inputItem text-capitalize'>
                    <input type='checkbox' id='2' value={2} />
                    <label htmlFor='2'>skirts</label>
                </div>
                <div className='inputItem text-capitalize'>
                    <input type='checkbox' id='3' value={3} />
                    <label htmlFor='3'>coats</label>
                </div>
            </div>
            <div className='filter_item'>
                <h4 className='text-capitalize'>filter by price</h4>
                <div className='inputItem'>
                    <span>0</span>
                    <input type='range' min={0} max={1000} />
                    <span>1000</span>
                </div>
            </div>
            <div className='filter_item'>
                <h4 className='text-capitalize'>sort by</h4>

                <div className='inputItem text-capitalize'>
                    <input type="radio" id="asc" value="asc" name="price" />
                    <label htmlFor="asc">Price (Lowest first)</label>
                </div>
                <div className='inputItem text-capitalize'>
                    <input type="radio" id="asc" value="asc" name="price" />
                    <label htmlFor="asc">Price (Highest first)</label>
                </div>
            </div>
    </div>
    )
}

export default FilterProducts
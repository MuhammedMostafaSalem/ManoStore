import React, { useState } from 'react'
import './Navbar.css'
import enImgNav from '../../../Images/en.png'
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';

const Navbar = () => {
    // select toggle menu mobile
    const [mobile, setMobile] = useState(false);

    return (
        <div className='navbar'>
            <div className='wrapper'>
                <div className='logo'>
                    <Link className ="link" to="/">ManoStore</Link>
                </div>
                <div className={mobile ? "active_menu" : "nav_menu"} onClick={()=> setMobile(false)}>
                    <div className='left'>
                        <div className="item">
                            <img src={enImgNav} alt="" />
                            <KeyboardArrowDownIcon />
                        </div>
                        <div className="item">
                            <span>USD</span>
                            <KeyboardArrowDownIcon />
                        </div>
                        <div className="item">
                            <Link className ="link" to="/products/1">Women</Link>
                        </div>
                        <div className="item">
                            <Link className ="link" to="/products/2">Men</Link>
                        </div>
                        <div className="item">
                            <Link className ="link" to="/products/3">Children</Link>
                        </div>
                    </div>

                    <div className='right'>
                        <div className="item">
                            <Link className ="link" to="/">Home</Link>
                        </div>
                        <div className="item">
                            <Link className ="link" to="/">About</Link>
                        </div>
                        <div className="item">
                            <Link className ="link" to="/">Contact</Link>
                        </div>
                        <div className="item">
                            <Link className ="link" to="/">Store</Link>
                        </div>
                    </div>
                </div>
                <div className="icons">
                    <SearchIcon className='i'/>
                    <PersonOutlineIcon className='i'/>
                    <FavoriteBorderIcon className='i'/>
                    <div className="cartIcon">
                        <ShoppingCartOutlinedIcon className='i'/>
                        <span>0</span>
                    </div>
                </div>
                <div className='mobile_bar' onClick={()=> setMobile(!mobile)}>
                    <span>
                        {
                            mobile ? <ClearIcon className='i'/> : <MenuIcon className='i'/>
                        }
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Navbar
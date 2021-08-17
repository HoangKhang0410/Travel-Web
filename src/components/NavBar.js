import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'

const NavBar = ({onClick}) => {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
        if (onClick){
            onClick(!click)
        }
    }
    return (
        <nav className="navbar">
            <Link to='/' className="logo">
                <span>trvl</span>
                <i className="fab fa-typo3"></i>
            </Link>
            <div className="categories">
                <Link to='/' className="category">Home</Link>
                <Link to="/services" className="category">Services</Link>
                <Link to="/products" className="category">Products</Link>
                <Link to="/sign-up" className="sign-up">Sign up</Link>
            </div>
            <div className="menu">
                <i className={click ? "fas fa-times" : "fas fa-bars"} onClick={handleClick}></i>
            </div>
        </nav>
    )
}

export default NavBar

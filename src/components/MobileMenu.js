import React from 'react'
import { Link } from 'react-router-dom'

const MobileMenu = ({style}) => {
    return (
        <div className="mobile-categories" style={style}>
                <Link to='/'>Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/products">Products</Link>
                <Link to="/sign-up">Sign up</Link>
        </div>
    )
}

export default MobileMenu

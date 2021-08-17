import React from 'react'
import NavBar from './NavBar'
import HeaderVideo from './HeaderVideo'
import MobileMenu from './MobileMenu'
import {useState, useEffect} from 'react'
const HeaderPanel = ({page}) => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const showMenu = () => {
        if (window.innerWidth < 1024){
            setShowMobileMenu(true);
        }
        else{
            setShowMobileMenu(false);
        }
    }
    const handleClick = (isClick) => {
        setShowButton(isClick);
    }
    const [showButton, setShowButton] = useState(false);
    window.addEventListener('resize', showMenu);
    useEffect(() => {
        showMenu();
    }, [])
    return (
        <div className="header-panel">
            <NavBar onClick={handleClick}></NavBar>
            <HeaderVideo page={page}/>
            {showMobileMenu && <MobileMenu style={showButton ? {transform: "translateX(0)"} : {transform: "translateX(-100%)"}} />}
        </div>
    )
}

export default HeaderPanel

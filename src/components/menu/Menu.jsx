import React from 'react'
import PropTypes from "prop-types"
import "./Menu.scss"

const Menu = ({openMenu, setOpenMenu}) => {
  return (
    <div className={"menu " + (openMenu && "active")}>
        <ul>
            <li onClick={() => setOpenMenu(false)}>
                <a href="#intro">
                    Home
                </a>
            </li>
            <li onClick={() => setOpenMenu(false)}>
                <a href="#portfolio">
                    Portfolio
                </a>
            </li>
            <li onClick={() => setOpenMenu(false)}>
                <a href="#works">
                    Works
                </a>
            </li>
            
            <li onClick={() => setOpenMenu(false)}>
                <a href="#testimonials">
                    Testimonials
                </a>
            </li>
            <li onClick={() => setOpenMenu(false)}>
                <a href="#contacts">
                    Contact
                </a>
            </li>
            
            
        </ul>
    </div>

  )
}

Menu.propTypes = {
    openMenu: PropTypes.bool,
    setOpenMenu: PropTypes.bool,
    
  };

export default Menu
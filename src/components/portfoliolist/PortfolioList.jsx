import React from 'react'
import "./PortfolioList.scss"
import PropTypes from "prop-types"

function PortfolioList({id, title, active, setSelected}) {

 
  return <li className={active ? "portfolioList active" : "portfolioList"} onClick={() => setSelected(id)}>
    {title}
  </li>
}
PortfolioList.propTypes = {
    title: PropTypes.string,
    active:  PropTypes.string,
    setSelected:  PropTypes.string,
    id:  PropTypes.string
  };
export default PortfolioList;
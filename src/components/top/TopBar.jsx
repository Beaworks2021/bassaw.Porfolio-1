import React from "react";
import PropTypes from "prop-types";
import "./TopBar.scss";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";

const TopBar = ({ openMenu, setOpenMenu }) => {
  return (
    <div className={"TopBarClass " + (openMenu && "active")} id="TopBarClass">
      <div className="wrapper">
        <div className="left">
          <a href="#portfolio" className="logo">
            bassaw.
          </a>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <span>+233 54 19 13 151</span>
          </div>
          <div className="itemContainer">
            <EmailIcon className="icon" />
            <span>ekowworks@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="humburger" onClick={() => setOpenMenu(!openMenu)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

TopBar.propTypes = {
  openMenu: PropTypes.bool,
  setOpenMenu: PropTypes.bool,
};

export default TopBar;

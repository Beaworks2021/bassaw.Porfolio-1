import "./App.scss"
import React from "react";
import PropTypes from "prop-types"
import TopBar from "./components/top/TopBar";
import Intro from "./components/intro/Intro"
import Portfolio from './components/portfolio/Portfolio';
import Works from './components/works/Works';
import Testimonials from './components/testimonials/Testimonials';
import Contacts from "./components/contacts/Contacts";
import { useState } from 'react';
import Menu from "./components/menu/Menu";

const App = () => {

  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className="app">
      <TopBar openMenu = {openMenu} setOpenMenu={setOpenMenu} />
      <Menu openMenu = {openMenu} setOpenMenu={setOpenMenu}/>
     <div className="sections">
      <Intro />
      <Portfolio />
      <Works />
      <Testimonials />
      <Contacts />
 
     </div>
    </div>
  );
};

App.propTypes = {
  openMenu: PropTypes.bool,
  setOpenMenu: PropTypes.bool,
  
};

export default App;

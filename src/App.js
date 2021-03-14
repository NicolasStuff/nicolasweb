import React, { useState, useRef, Component } from 'react';
import './App.css';
import CodeDesign from './component/codeDesign'
import Discover from './component/discover'
import Profile from './component/profile'
// import { motion } from "framer-motion"
import NavBar from './NavBar'


function App() {

  return (
    <div>
      {/* <NavBar className='body'></NavBar> */}
      <div className="sectionSize">
        <CodeDesign></CodeDesign>
      </div>
      <div>
        <Discover></Discover>
      </div>
      <div>
        <Profile></Profile>
      </div>
    </div>
  )
}

export default App;

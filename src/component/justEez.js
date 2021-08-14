import React, { useEffect, useRef, Component } from 'react';
import '../App.css';
// import Carousel from './carrousel3d'
function justEez() {
  return (
    <div className='portFolioContainer center row whiteBackgroundProjectLeft'>
      <img src={require('../img/justeez.png')} className='justeezPic'></img>
      <div className='titleAndDescRight'>
        <text className="Title">JustEez</text>
        <div className='subtitleContainer'>
          <text className="Subtitle">BackOffice of JustEez </text>
        </div>
        <div className='subtitleContainer'>
          <text className="Subtitle">FullStack developpement : React Js/Node</text>
        </div>
        <div className='subtitleContainer'>
          <text className="Subtitle">Features : Chrono, CRUD, Task Manager </text>
        </div>
      </div>
      {/* <Carousel></Carousel> */}
    </div>
  )
}
export default justEez;

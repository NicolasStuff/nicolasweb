import React, { useEffect, useRef, Component } from 'react';
import '../App.css';
// import Carousel from './carrousel3d'
function reactFlix() {
  return (
    <div className='portFolioContainer center row whiteBackgroundProjectLeft'>
      <img src={require('../img/reactFlix.png')} className='webPic'></img>
      <div className='titleAndDescRight'>
        <text className="Title">Streaming platform</text>
        <div className='subtitleContainer'>
          <text className="Subtitle">Streaming platform challenge build in 1 day</text>
        </div>
        <div className='subtitleContainer'>
          <text className="Subtitle">FullStack developpement : React Js/Node</text>
        </div>
        <div className='subtitleContainer'>
          <text className="Subtitle">Features : Streaming video reader, Multi-Select Filter, Search bar. </text>
        </div>
      </div>
      {/* <Carousel></Carousel> */}
    </div>
  )
}
export default reactFlix;

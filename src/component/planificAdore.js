import React, { useEffect, useRef, Component } from 'react';
import '../App.css';

function Planif() {
  return (
    <div className='portFolioContainer center row whiteBackgroundProjectLeft'>
      <img src={require('../img/planificAdore.png')} className='planifPic'></img>
      <div className='titleAndDescRight'>
        <text className="Title">PlanificAdore</text>
        <div className='subtitleContainer'>
          <text className="Subtitle">Website of PlanificAdore </text>
        </div>
        <div className='subtitleContainer'>
          <text className="Subtitle">FullStack developpement : ReactJS/Node</text>
        </div>
        <div className='subtitleContainer'>
          <text className="Subtitle">Features : Contact component and Booking Space</text>
        </div>
      </div>
    </div>
  )
}
export default Planif;

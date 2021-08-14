import React, { useEffect, useRef, Component } from 'react';
import '../App.css';
// import Carousel from './carrousel3d'
function Consult() {
  return (
    <div className='portFolioContainer center row whiteBackgroundProjectRight'>
      <div className='titleAndDescRight'>
        <text className="Title">ConsultAway</text>
        <div className='subtitleContainer'>
          <text className="Subtitle">Mobile app of ConsultAway </text>
        </div>
        <div className='subtitleContainer'>
          <text className="Subtitle">Front-end developpement : React Native</text>
        </div>
        <div className='subtitleContainer'>
          <text className="Subtitle">Features : Video with Twilio Video (webRTC), Live Tchat, billing with Stripe and Authentification system using Fingerprint. </text>
        </div>
      </div>
      <img src={require('../img/ConsultAway.png')} className='consultPic'></img>
      {/* <Carousel></Carousel> */}
    </div>
  )
}
export default Consult;
